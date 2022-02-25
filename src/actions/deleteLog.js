//log id needs to be passed in 
//asynch so need to return dispatch 
//send dispatch (object) of the type and payload of what log to get rid of 
//delete request goes to api/v1/runs/1/logs/3 --> NESTED
//give the function information by defining a varialbe
//make a fetch delete
//after deleting on backend --> update state on the frontend so that frontend has same information
//turn the run information back into json
//send information to redux store --> use dispatch --> dispatch always needs an object of type and payload of log id
//send the payload of log id to tell dispatch which one to get rid of
//MUST PASS IN LOG ID FIRST OR ELSE THE QUERY WONT MATCH UP
export const deleteLog = (logId,runId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/runs/${runId}/logs/${logId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(run => dispatch({type: 'DELETE_LOG', payload: run}))
    }


}