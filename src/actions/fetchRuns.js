//Actions are plain objects with a type field and payload, and describe what happened in the app
//Action creator is a function

//Similar to JS --> This will fetch the index of runs and then send the JSON response
export function fetchRuns(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/runs')
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(runs => dispatch({
            //dispatch action to reducer
            //You need dispatch in here so that you are waiting for the fetch and then updating the store after the fetch is complete
            //dispatch must always have a type
            type: 'FETCH_RUNS',
            payload: runs
        }))
    }
}

//dispatch action object to reducer which will update state