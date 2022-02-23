import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'
//---ACTIONS----
import { fetchRuns } from './actions/fetchRuns';


class App extends React.Component {

//----TEST THE FETCH------------------------
//test fetch - asynch, request will take some time, dont do anything with the data until you get respopnse bacek
//fetch request returns a promise which is a promise that it will bring back data
componentDidMount() {
  // fetch('http://localhost:3000/api/v1/runs')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .then(data => console.log(data[0]))
  // .then(data => console.log(data[0].category))
  // .then(data => console.log(data[0].logs))
 
}


  render() {
  return (
    <div className="App">
      App
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    runs: state.runs
  }
}

//mapstattoprops is the way to access values in the store as props
//mapstatetoprops gives access to see what is already in our store
//gives access to this.props.fetchaccounts
export default connect(mapStateToProps)(App);
