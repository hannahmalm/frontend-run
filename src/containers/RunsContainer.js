//render other components
//class componenets
// import App from "../App";
import React from "react";
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import RunShow from "../components/RunShow"; //default export
import { RunList } from "../components/RunList"; //named export


//IMPORT FETCH ACTION FOR COMPONENT DID MOUNT
import {fetchRuns} from '../actions/fetchRuns.js'



//a class component must have a render 
class RunsContainer extends React.Component{

//import fetchRuns from the action
//anytime this container mounts, make a fetch(action), to the backend
//the action will then dispatch the reducer
//the reducer will then look at the case and update the state
//Lifecycle method that gets called AFTER the render
//You would use this method to set up any long-running processes or asynchronous processes such as fetching and updating data
//gets a list of the run categories from the backend
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
//passing the runs props into the Run List and Run show --> I call the property run 
//routerProps = These router props allow you to go forward or back in your application and are helpful for sending a client to specific locations when they submit a form, or click on a button or link.
//routerProps are used to push a new route
    render() {
        return(
        <div>
            <Switch>
                    <Route  path='/runs/:id' render={(routerProps)=> <RunShow {...routerProps} runs={this.props.runs}/>}  />
                    <Route  path='/runs' render={(routerProps)=> <RunList {...routerProps} runs={this.props.runs}/>} />
            </Switch>
        </div>
        )
    }
}


//takes in state from reducts store, returning runs
const mapStateToProps = state => {
    return {
        runs: state.runs
    }
}

//use connect to connect any component that is a child of app to connect to the store 
//mapStateToProps - used to see the props
//mapDispatchToProps
//The connect() function then takes the return value from the mapStateToProps() function and adds that return value to the props of the component that is passed through in the last set of parentheses.
//Call that component a connected component because it is connected to the store.
//mapstattoprops is the way to access values in the store as props --> gives access to see what is already in the store
export default connect(mapStateToProps, {fetchRuns}) (RunsContainer);