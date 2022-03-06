import React from "react";
//STATE
//forms should be a class componenet because you need to keep track of entered values
//Most form states should not be kept in Redux (global), rather should be local to the React component


//in order to have a contolled form you need to store input values in the state
//can get access to all props so no need to fetch --> need a submit and then connect to the store 
//connect compoenet so that when you call it will send dispatch
//How do you make a controlled form? Add Values and Names that correspond to keys in DB and the form holds values in the local state
import {connect} from 'react-redux' //when we call function, the action is dispatched to reducer
import {createLog}  from "../actions/createLog"; 


class LogForm extends React.Component {

    initialState = {   distance: '',
    pace: '',
    date: '',
    notes: ''}

    state = this.initialState
    //Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
    //controlled values in local state
    //name in form must match key in state
    //state is updated using handle onChange
    //hold values for the form in the local state
    //https://reactjs.org/docs/forms.html
    // state = {
    //     distance: '',
    //     pace: '',
    //     date: '',
    //     notes: ''

    // }

    //take the inital state and set it to the value of whatever the input is on the onChange
    //This is how you update state
    //the event is whenever someone types something in the form
    //The first thing to pass into an onChange is this.setState --> this is used to update the state
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault() //prevents form from automatically submitting
        console.log('hit sumbit')
        //action creator in actions --> send in the state and the props id and the run id that will be changing
        //invoke the function to send to the action
        //maping createLog as props so call it and invoke it that way 
        this.props.createLog(this.state, this.props.run.id)
     
    //    this.state() //clear the form by sending in inital state
        this.setState({
            distance: '',
            pace: '',
            date: '',
            notes: ''
        })
      
    }


    //Once you click submit, I am submitting a new log that will need to be sent to database and will need to dispatch to redux store
    //This means I need to use connect
    render() {
        return(
            <div>
              <h3 class='form-text-center'><b>Create a Run Journal</b></h3>
                <form onSubmit={this.handleOnSubmit}>
                <div class="form-text-center">
                    <input type="number" step="0.01" placeholder="Distance" value={this.state.distance} name="distance" onChange={this.handleOnChange} required/>
                    <input type="text" placeholder="Pace" value={this.state.pace} name="pace" onChange={this.handleOnChange} required/>
                    <input type="date" placeholder="Date" value={this.state.date} name="date" onChange={this.handleOnChange} required/>
                    <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange} required/>
                    <input type="submit" />
                    </div>
                </form>
            </div>
    
        )
    }
}


//When connect is invoked it knows createLog action will dispatch and update the store
//Mapping createLog as props
//When using connect and have no map state to props, use null
//dont need map state to props because its recieve all props in here 
//Pass in the action being called in the submit
//createLog here is the mapDispatch
export default connect(null, {createLog})(LogForm);