//data sent is the data from the set state on the handle submit
//because of thunk, you can bring dispatch in
export const createRun = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/runs')
        .then(response => response.json())
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