import React from 'react'
import './App.css';
// import React, { Component } from 'react'
import {connect} from 'react-redux'
//---ACTIONS----
import { fetchRuns } from './actions/fetchRuns'; //Used to test the fetch 
//---CONTAINERS
import RunsContainer from './containers/RunsContainer';
import Home from './components/Home';
import { Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import  Benefits  from './components/Benefits';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';


class App extends React.Component {

//----TEST THE FETCH------------------------
//test fetch - asynch, request will take some time, dont do anything with the data until you get respopnse bacek
//fetch request returns a promise which is a promise that it will bring back data
// componentDidMount() {
  // fetch('http://localhost:3000/api/v1/runs')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .then(data => console.log(data[0]))
  // .then(data => console.log(data[0].category))
  // .then(data => console.log(data[0].logs))
// }


    /* <Header/>
    <RunsContainer/>  
     <Home/> */
      
    

  render() {
  return (
    
    <div>
      <Header/>
      <HomeContainer/>
      <RunsContainer/>  
      <Footer/>
    </div>
 

  );
  }
}

export default App;

//mapstattoprops is the way to access values in the store as props
//mapstatetoprops gives access to see what is already in our store
//gives access to this.props.fetchaccounts
// export default connect(mapStateToProps)(App);
