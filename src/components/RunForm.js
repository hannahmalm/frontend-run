//new run form 
import React from "react";
import {connect} from 'react-redux' //connecting to store
import { createRun } from "../actions/createRun";

//class component - Will take in State
//CONTROLLED FORM need a value
//NEED AN ONCHANGE HANDLER
class RunForm extends React.Component{

    state = {category: ''}

    //onchange
    //pass in event as paramenter
    //event.target.value shows what you are typing in
    //everytime someone makes a change, save it to the state
    handleOnChange = (e) => {
        this.setState({
            // category: event.target.value
            [e.target.name]: e.target.value
        })
    }
    

    //onsubmit --> Put this data into the database and render into the run list
    //Will need an action to handle this post 
    //create the run action with the state information from the onchange
    //from the createRun Action, it will dispatch and post
    //then the reducer will take over
    handleOnSubmit = (e) => {
       e.preventDefault() //does not rerender the form
       this.props.createRun(this.state)
    }

    render(){
        return(
            <div>
                <h3>Create a New Training Category</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Run Category" value={this.state.category} name="category" onChange={this.handleOnChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


//mapStateToProps gives you access to what is ALREADY in the redux store
//This does not need to see what is already in the store
//This component needs to create data thats sent and update the store with the new stuff
//pass null because you are not using mapStateToProps
//You could write mapDispatch to props, or directly import the action like seen here
//This is saying that you will call dispatch within the createRun action
export default connect(null, {createRun}) (RunForm);