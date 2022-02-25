

//take the run type and dispatch it to the reducer --> render the run type associted with a reducer
//to create a log associated with a run, you need to pass in the log, and you need to know the run ID
//Submitting a form so its a post
//asynch request so return dispatch
//posting new log to the run/1/logs page 
//When a new log is created and saved, it renders the run --> last line of action --> then it goes to reducer
//PAYLOAD = 
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
        .then(run => dispatch({type: 'CREATE_LOG', payload: run}))
    }
}

//ADD CREATE LOG TO REDUCER --> CREATE LOG
//take the run and dispatch it to the reducer --> using run in the dispatch because in the create method in rails it renders @run not log