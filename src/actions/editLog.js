export const editLog = (logId,runId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/runs/${runId}/logs/${logId}`, {
            method: 'UPDATE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(response => response.json())
        .then(run => dispatch({type: 'UPDATE_LOG', payload: run}))
    }
}

//see if backend aligns within the controller