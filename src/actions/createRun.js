//Actions are plain objects with a type field and payload, and describe what happened in the app
//Action creator is a function
//data sent is the data from the set state on the handle submit
//because of thunk, you can bring dispatch in
//POST fetch
//data = run object
//ALWAYS INCLUDE REDUCER TYPE IN THE DISPATCH
export const createRun = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/runs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(run => dispatch({type: 'CREATE_RUN', payload: run})) //automatically adding new run to redux store without refetching 

    }
}