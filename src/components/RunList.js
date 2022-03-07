import React from "react";
import {Link} from 'react-router-dom'
//functional componenet - stateless; presents a list of run types --> Render not needed in functional component
// Return a list of Run Categories with a Link to each one
//PROPS PASSED DOWN FROM RUNS CONTAINER
//props are passed in as an argument info being passed from run container to child component of runs
//Iterate over the runs as props and create a link to each individual run cateogry
export const RunList = (props) => {
    return (
     <div className="text-center"> 
     <br></br>
     <br></br>
     {props.runs.map(run => <div key={run.id}>
            <Link to={`/runs/${run.id}`}>{run.category}</Link> </div>)}  
      </div> 

    )
}
