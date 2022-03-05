import React from "react";
// import RunShow from "./RunShow";
import {Link} from 'react-router-dom'
//functional componenet - stateless; presents a list of run types

//you do NOT need a render in a funcitonal component
//Return entire list of Runs

//props are passed in as an argument info being passed from run container to child component of runs
export const RunList = (props) => {
    return (
     <div class="text-center"> 
     {props.runs.map(run => <div key={run.id}>
            <Link to={`/runs/${run.id}`}>{run.category}</Link> </div>)}  
      </div> 

    )
}
