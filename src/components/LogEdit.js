// import React from "react";
// //STATE
// //forms should be a class componenet because you need to keep track of entered values
// //Most form states should not be kept in Redux (global), rather should be local to the React component


// //in order to have a contolled form you need to store input values in the state
// //can get access to all props so no need to fetch --> need a submit and then connect to the store 
// //connect compoenet so that when you call it will send dispatch
// //How do you make a controlled form? Add Values and Names that correspond to keys in DB and the form holds values in the local state
// import {connect} from 'react-redux' //when we call function, the action is dispatched to reducer
// import {createLog}  from "../actions/createLog"; 
// import { editLog } from "../actions/editLog";


// class LogEdit extends React.Component {


//     initialState = {   distance: '',
//     pace: '',
//     date: '',
//     notes: ''}

//     state = this.initialState
   

//     handleOnChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault() //prevents form from automatically submitting
//         console.log('hit update')
      
//         this.props.createLog(this.state, this.props.run.id)
//     //reclear the form
//         this.setState({
//             distance: '',
//             pace: '',
//             date: '',
//             notes: ''
//         })
      
//     }


//     //Once you click submit, I am submitting a new log that will need to be sent to database and will need to dispatch to redux store
//     //This means I need to use connect
//     render() {
//         return(
//             <div>
//               <h3 class='text-center'><b>Edit a Run Log</b></h3>
//                 <form onSubmit={this.handleOnSubmit}>
//                 <div class="text-center">
//                     <input type="number" step="0.01" placeholder="Distance" value={this.state.distance} name="distance" onChange={this.handleOnChange} required/>
//                     <input type="text" placeholder="Pace" value={this.state.pace} name="pace" onChange={this.handleOnChange} required/>
//                     <input type="date" placeholder="Date" value={this.state.date} name="date" onChange={this.handleOnChange} required/>
//                     <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange} required/>
//                     <input type="submit" />
//                     </div>
//                 </form>
//             </div>
    
//         )
//     }
// }


// export default connect(null, {editLog})(LogEdit);