//a reducer is where you define action types and it takes the previous state
//1st argument is previous state, second argument is action types
//a reducer is a funciton
//import reducer into store 


//inital state is the key of runs with the array of runs
export default function runReducer(state = {runs: []}, action) {
    debugger;
    switch (action.type){
        case 'FETCH_RUNS': 
            //return a new version of state
            return {runs: action.payload}
        case 'CREATE_RUN':
            //want to keep runs taht are in state AND add a new one --> use state spread
            //runs should point to an array that has all of the previous runs in it, along with the new run
            return {...state, runs: [...state.runs, action.payload]}
        
    default:
        return state
    }
    
}