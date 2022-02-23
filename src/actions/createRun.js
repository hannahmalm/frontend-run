//data sent is the data from the set state on the handle submit
//because of thunk, you can bring dispatch in
//POST fetch
//data = run object
export const createRun = (data) => {
    debugger;
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/runs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })

    }
}