//render other components
//class componenets
import App from "../App";
import React from "react";
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import RunForm from "../components/RunForm";
import RunList from "../components/RunList";
import {fetchRuns} from '../actions/fetchRuns.js'
import RunShow from "../components/RunShow";
import Benefits from "../components/Benefits";
import Home from "../components/Home";




//a class component must have a render 
class RunsContainer extends React.Component{

//import fetchRuns from the action
//anytime this container mounts, make a fetch(action), to the backend
//the action will then dispatch the reducer
//the reducer will then look at the case and update the state
componentDidMount(){
    this.props.fetchRuns()
}

//render takes in a function for passing in routes to a route
//in order for the routes to have access to the props, routes neeed to be set here
//runs component is iterating over collection of run types --> give run component the props for runs list
//router props need to be passed in when rendering a specific id --> DONT use componenet, use render instead
//routerProps automatically adds in the props to the component we are renderign
//Switch returns the FIRST path that matches --> SPECIFIC routes must come before any dynamic routes
//exact does not work fro runs/new and /runs/:id because it technically is the exact path
    render() {
        return(
        <div>
       
        <Switch>
                <Route exact path='/runs/new' component={RunForm}/>
                <Route exact path='/benefits' component={Benefits}/>
                <Route exact path='/runs/:id' render={(routerProps)=> <RunShow {...routerProps} runs={this.props.runs}/>}  />
                <Route exact path='/runs' render={(routerProps)=> <RunList {...routerProps} runs={this.props.runs}/>} />
        </Switch>
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
export default connect(mapStateToProps, {fetchRuns}) (RunsContainer);