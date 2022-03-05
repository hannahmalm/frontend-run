//Stateless - Presentational
import React from "react";
import {connect} from 'react-redux'
import { deleteLog } from "../actions/deleteLog";

//render all logs --> Functional compoenent because only rendering 
//functional components receive props
//map over the props logs with one log




//job is to render all logs in a list based on the run 
//props.logs first checks to see if there are any logs
//if there are logs, then map over the logs
const LogList = (props) => {

    //delete buttons need an onclick
    //when we click delete it will need to go to backed
    //call action creator --> deleteLog.js
    //coming in as props instead of this.props becasue this is a functional component
    //passed in arguments are the same as in the deleteLog actions
    const handleDelete = (log) => {
        props.deleteLog(log.id, log.run_id)

    }

    //editLog is the action
    //pass in the log id and the run id associated with the log
    const handleEdit = (log) => {
        props.editLog(log.id, log.run_id)
    }

    return(
        <div class="text-center">
            <br/>
            {props.logs && props.logs.map(log =>
              <ul key={log.id}> <b>Date: </b>{log.date} -- <b> Distance:</b> {log.distance} Miles -- <b>Pace:</b> {log.pace} -- <b>Notes: </b>{log.notes} <button onClick={()=> handleDelete(log)}> Delete</button> <button onClick={()=> handleEdit(log)}> Edit</button></ul>  
                )}
        </div>
    )
}

//now have access to dispatch to props in deletelog. Invoke deleteLog in the handleClick
export default connect(null,{deleteLog}) (LogList);