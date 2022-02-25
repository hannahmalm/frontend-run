//functional component --> only displying --> STATELESS 
//render all of the one Run Category Page --> Then render all logs associated with the run
//Import the RunList --> The list of all Runs
//iterate overall of the Run types on the list --> Each run will have an ID and create a component for  each 
//each prop passed in should be a SPECIFIC Run type
import React from 'react'
import {Redirect} from 'react-router-dom'
import LogsContainer from '../containers/LogsContainer'

//when rendering an individual Run types page --> render the Logs container too 
//The logs container has all of the logs and the ability to create new logs

const RunShow = (props) => {
    console.log(props)

    // let run = props.run //this is an array of ALL runs
    let run = props.runs[props.match.params.id - 1] //accessing specific element in array
    // let run = props.run.filter(run => run.id == props.match.params.id)[0]
    // console.log(run)
    //if run is null, redirect to runs
    //render a logs container for EVERY Run Show page --> Render the logs container when the run id matches
    //this component renders ONE specific Run Type
    //pass that run id into the Logs container since it is nested
    return(
        <div>
             <li>
            {/* {run ? null : <Redirect to='/runs/'/>} */}
            {run ? run.category :null} -  {run ? run.instructions :null}
            {/* {run.category} */}
        </li>
        <LogsContainer run={run}/>
        </div>
       
    )

  

}

export default RunShow;