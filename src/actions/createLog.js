


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
        .then(log => dispatch({type: 'CREATE_LOG', payload: log}))
    }
}