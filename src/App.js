import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends React.Component {


//test fetch - asynch, request will take some time, dont do anything with the data until you get respopnse bacek
//fetch request returns a promise which is a promise that it will bring back data
componentDidMount() {
  fetch('http://localhost:3000/api/v1/runs')
  .then(response => response.json())
  .then(data => console.log(data))
  // .then(data => console.log(data[1]))
  // .then(data => console.log(data[0].category))
  //adda serilizer to get this info
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

export default App;
