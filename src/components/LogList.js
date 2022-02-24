//render all logs --> Functional compoenent because only rendering 
//functional components receive props
//map over the props logs with one log
import React from "react";

const LogList = (props) => {
    return(
        <div>
            {props.logs.map(log =>
              <li key={log.id}>{log.date} - {log.distance} - {log.pace} - {log.notes}</li>  
                )}
        </div>
    )
}


export default LogList;