//render all logs --> Functional compoenent because only rendering 
//functional components receive props
//map over the props logs with one log
import React from "react";


//job is to render all logs in a list based on the run 
//props.logs first checks to see if there are any logs
//if there are logs, then map over the logs
const LogList = (props) => {
    return(
        <div>
            {props.logs && props.logs.map(log =>
              <li key={log.id}>{log.date} - {log.distance} - {log.pace} - {log.notes} <button onClick={handleOnDelete}>Delete</button></li>  
                )}
        </div>
    )
}


export default LogList;