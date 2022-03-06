//functional component --> only displying each individual run --> STATELESS 
//render all of the one Run Category Page --> Then render all logs associated with the run
//Import the RunList --> The list of all Runs
//iterate overall of the Run types on the list --> Each run will have an ID and create a component for  each 
//each prop passed in should be a SPECIFIC Run type
import React from 'react'
import LogsContainer from '../containers/LogsContainer'


//when rendering an individual Run types page --> render the Logs container too 
//The logs container has all of the logs and the ability to create new logs

const RunShow = (props) => {
    // console.log(props)
    let run = props.runs[props.match.params.id - 1] //accessing specific element in array
    // console.log(run)

    let runVideo =  <iframe width="600" height="350" src={run.video}></iframe>
    //if run is null, redirect to runs
    //render a logs container for EVERY Run Show page --> Render the logs container when the run id matches
    //this component renders ONE specific Run Type
    //pass that run id into the Logs container since it is nested
    return(
        <div class='text-center'>
            <br/>
            <h4>{run ? run.category :null} Instructions:  {run ? run.instructions :null}</h4>   
            {/* <br></br> */}
            {run ? runVideo :null}
            <br></br>
            <LogsContainer run={run}/>
        </div>
       
    )

  

}

export default RunShow;