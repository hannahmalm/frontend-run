//functional component --> only displying --> STATELESS 
//render all of the one Run Category Page --> Then render all logs associated with the run
//Import the RunList --> The list of all Runs
//iterate overall of the Run types on the list --> Each run will have an ID and create a component for  each 
//each prop passed in should be a SPECIFIC Run type

const RunShow = (props) => {
    console.log(props)

    // let run = props.run //this is an array of ALL runs
    // let run = props.runs[props.match.params.id - 1] //accessing specific element in array
    // console.log(run)
    return(
        <li>
        {/* {props.run.category} */}
        test run
        </li>
    )

  

}

export default RunShow;