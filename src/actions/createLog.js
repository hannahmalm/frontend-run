//Actions are PLAIN JS OBJECTS with a TYPE field and payload, and describe what happened in the app
//Action creator is a FUNCTION

//to create a log associated with a run, you need to pass in the log, and you need to know the run ID
//Submitting a form so its a post
//asynch request so return dispatch
//posting new log to the run/1/logs page 

export const createLog = (log, runId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/runs/${runId}/logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        })
        .then(response => response.json())
        .then(run => dispatch({type: 'CREATE_LOG', payload: run}))  //take the run type and dispatch it to the reducer --> render the run type associted with a reducer
    }
}

//ADD CREATE LOG TO REDUCER --> CREATE LOG
//take the run and dispatch it to the reducer --> using run in the dispatch because in the create method in rails it renders @run not log

//When a new log is created and saved, it renders the run --> last line of action --> then it goes to reducer
//send back the run that the log is associated with 