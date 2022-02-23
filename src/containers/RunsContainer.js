//render other components
//class componenets
import App from "../App";
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import RunForm from "../components/RunForm";
import RunList from "../components/RunList";
import {fetchRuns} from '../actions/fetchRuns.js'


import Test from "../components/Test";

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
    render() {
        return(
       
             /* <Router>
             <Route path='/test' component={Test} />
            {/* <Route path='/test' component={Test}/> */
                /* <Route path='/runs/new' component={RunForm}/> */
                /* <Route path='/runs/:id' />
                <Route exact path='/runs' render={() => <RunList runs={this.props.runs}/>} /> */
                /* <RunList runs={this.props.runs}/> */
                /* </Router> */

    <BrowserRouter>
        <div>
        <Switch>
            {/* <IndexRoute component={Home}/> */}
            <Route path="/" component={Test}/>
            {/* <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/> */}
         </Switch>
     </div>
    </BrowserRouter>
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