//Reducers are FUNCTIONS that calculate a new state value based on previous state + action
//Reducers take in a previous(inital) state, and an action
//This reducer gets inported into the Store 
//-----RULES OF REDUCER------
    //Reducer must always calculate new state value based on state and action arguments
    //Reducer must NEVER modify existing state --> make immutable updates instead by copying existing state (...state) using the spread operator
    //Reducers are Pure functions --> They must never do asynchronous logic or invoke side effects


//inital state is the key of runs with the array of runs
export default function runReducer(state = {runs: []}, action) {
    switch (action.type){
        case 'FETCH_RUNS': 
            //return a new version of state
            return {runs: action.payload}
        // case 'CREATE_RUN':
        //     //want to keep runs taht are in state AND add a new one --> use state spread
        //     //runs should point to an array that has all of the previous runs in it, along with the new run
        //     return {...state, runs: [...state.runs, action.payload]}
            //go through every run, if the run ID is not the same as the one associted with log, replace it
            //iterate over all runs and if the run id = the id that is coming in to the action.paylod, then replace using map to make a new array to action.payload
            //if the run id does not match, return the original run
            //iterate through runs already created check if the id thats coming back matches the current iteratorn
            //find the run ID thats being passed in, if it matches the payload id
            //return a new array. Look through all the runs 
            // if the run id = the action payload id, then return the new array using action.payload (updated run array)
            //map will create a NEW array of the runs with the new and updated runs
            //else return the original run arary 
        case 'CREATE_LOG':
           let runs = state.runs.map(run => {
               if (run.id === action.payload.id ){
                   return action.payload
               }
               else {
                   return run
               }
           })
           return {...state, runs: runs} //this will update the page and actually render the new log on the runs page
            // return {...state, runs: state.runs.map(run => {
            //     if (run.id === action.payload.id) {
            //         return action.payload
            //     }
            //     else {
            //     return run 
            //     }
            // })}
           //the run we are sending back is the run associated with the log
           // you have to do it this way due to nesting on the backend 
        case 'DELETE_LOG':
            let runsDelete = state.runs.map(run => {
                if (run.id === action.payload.id ){
                    return action.payload
                }
                else {
                    return run
                }
            })
            return {...state, runs: runsDelete}

    default:
        return state
    }
    
}