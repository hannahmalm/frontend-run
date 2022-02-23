//render other components
//class componenets
import React from "react";
import {connect} from 'react-redux'
import RunForm from "../components/RunForm";
import RunList from "../components/RunList";
import {fetchRuns} from '../actions/fetchRuns.js'

//a class component must have a render 
class RunsContainer extends React.Component{

//import fetchRuns from the action
componentDidMount(){
    fetchRuns()
}

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

//takes in state from reducts store, returning runs
const mapStateToProps = state => {
    return{
        runs: state.runs
    }
}

//use connect to connect any component that is a child of app to connect to the store 
//mapStateToProps - used to see the props
//mapDispatchToProps
export default connect(mapStateToProps) (RunsContainer);