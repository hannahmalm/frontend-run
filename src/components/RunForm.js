//new run form 
import React from "react";

//class component - Will take in State
//CONTROLLED FORM need a value
//NEED AN ONCHANGE HANDLER
class RunForm extends React.Component{

    state = {category: ''}

    //onchange
    //pass in event as paramenter

    handleOnChange = () => {

    }
    

    //onsubmit

    render(){
        return(
            <div>
                <h3>Create a New Training Category</h3>
                <form>
                    <input type="text" placeholder="Run Category" value={this.state.category} onChange={this.handleOnChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default RunForm;