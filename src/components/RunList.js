import React from "react";
import RunShow from "./RunShow";
//functional componenet - stateless; presents a list of run types
//pass the props in as an argument
//you do NOT need a render in a funcitonal component

//props is the info being passed from run container to child component of runs
const RunList = (props) => {
    return (
        <div>
           {/* {props.runs.map(run => <li key={run.id}> {run.category}</li> )} */}
           {props.runs.map(run => <div key={run.id}><RunShow run={run}/></div> )}  
        </div>
    )
}

export default RunList;