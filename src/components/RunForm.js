//new run form 
import React from "react";

//class component - Will take in State
//CONTROLLED FORM need a value
//NEED AN ONCHANGE HANDLER
class RunForm extends React.Component{

    state = {category: ''}

    //onchange
    //pass in event as paramenter
    //event.target.value shows what you are typing in
    handleOnChange = (event) => {
        this.setState({
            // category: event.target.value
            [event.target.name]: event.target.value
        })
    }
    

    //onsubmit --> Put this data into the database and render into the run list
    handleOnSubmit = (event) => {
        debugger;
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

export default RunForm;