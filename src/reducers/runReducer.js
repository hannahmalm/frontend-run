//a reducer is where you define action types and it takes the previous state
//1st argument is previous state, second argument is action types
//a reducer is a funciton
//import reducer into store 


//inital state is the key of runs with the array of runs
export default function runReducer(state = {runs: []}, action) {
    switch (action.type){
        case 'FETCH_RUNS': 
        //return a new version of state
        return {runs: action.payload}
    default:
        return state
    }
    
}