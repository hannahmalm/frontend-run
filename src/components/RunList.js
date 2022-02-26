import React from "react";
import RunShow from "./RunShow";
import {Route, Link} from 'react-router-dom'
//functional componenet - stateless; presents a list of run types
//pass the props in as an argument
//you do NOT need a render in a funcitonal component
//Return entire list of Runs

//props is the info being passed from run container to child component of runs
const RunList = (props) => {
    return (

//         <div className="card" >
//         <div className="card-body">
//             {/* <h2 className="card-title">Benefits of Running</h2>
//             <li className="benefits-list">Running Builds Muscular Strength.</li */}
//         </div>
// </div>
        <div>
           {props.runs.map(run => <div key={run.id}>
            <Link to={`/runs/${run.id}`}>{run.category}</Link> </div>)}  
        </div>
    )
}

export default RunList;