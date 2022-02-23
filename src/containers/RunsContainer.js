//render other components
//class componenets
import React from "react";
import RunForm from "../components/RunForm";
import RunList from "../components/RunList";

//a class component must have a render 
class RunsContainer extends React.Component{
    render() {
        return(
            <div> 
                In My Run Container I see:
                <RunForm></RunForm> 
                <RunList></RunList> 
            </div>
        )
    }
}

export default RunsContainer;