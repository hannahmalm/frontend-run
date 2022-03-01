import React from "react";
import RunShow from "./RunShow";
import {Route, Link} from 'react-router-dom'
//functional componenet - stateless; presents a list of run types
//pass the props in as an argument
//you do NOT need a render in a funcitonal component
//Return entire list of Runs


<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>


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