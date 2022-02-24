import React from "react";

//forms should be a class componenet because you need to keep track of entered values
//in order to have a contolled form you need to store input values in the state
//can get access to all props so no need to fetch --> need a submit and then connect to the store 
//connect compoenet so that when you call it will send dispatch
//How do you make a controlled form? Add Values and Names that correspond to keys in DB and the form holds values in the local state
import {connect} from 'react-redux'
import { createLog } from "../actions/createLog";

class LogForm extends React.Component {

    //controlled values in local state
    //name in form must match key in state
    //state is updated using handle onChange
    state = {
        distance: '',
        pace: '',
        date: '',
        notes: ''

    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault() //prevents form from automatically submitting
        //action creator in actions --> send in the state and the props id and the run id that will be changing
        //invoke the function to send to the action
        this.props.createLog(this.state, this.props.id)
        //clear the form by sending in inital state
        this.setState({state})
      
    }


    render() {
        return(
            <div>
              <h3>Create a Run Log</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input  type="number" step="0.01" placeholder="Distance" value={this.state.distance} name="distance" onChange={this.handleOnChange}/>
                    <input type="text" placeholder="Pace" value={this.state.pace} name="pace" onChange={this.handleOnChange}/>
                    <input type="date" placeholder="Date" value={this.state.date} name="date" onChange={this.handleOnChange}/>
                    <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange}/>
                    <input type="submit" />
                </form>
            </div>
    
        )
    }
}


//when connect is invoked it knows createLog action will dispatch and update the store
//mapping createLog as props
export default connect(null, {createLog}) (LogForm);