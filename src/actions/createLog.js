

//take the run type and dispatch it to the reducer --> render the run type associted with a reducer
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

//ADD CREATE LOG TO REDUCER