import React from 'react'
import './App.css';
//---CONTAINERS
import RunsContainer from './containers/RunsContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import BenefitsContainer from './containers/BenefitsContainer';
import ListHeaderContainer from './containers/ListHeaderContainer';


class App extends React.Component {

//----TEST THE FETCH------------------------
//componentDidMount is a lifecycle method that can be used to test the fetch - this was the first step to ensuring backend and frontend are working properly 
//test fetch - asynch, request will take some time, dont do anything with the data until you get respopnse back
//fetch request returns a promise which is a promise that it will bring back data
// componentDidMount() {
  // fetch('http://localhost:3000/api/v1/runs')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .then(data => console.log(data[0]))
  // .then(data => console.log(data[0].category))
  // .then(data => console.log(data[0].logs))
// }


  render() {
  return (
    
    <div>
      <Header/>
      <HomeContainer/>
      <ListHeaderContainer/>
      <RunsContainer/>  
      <BenefitsContainer/>
      <Footer/>
    </div>
 

  );
  }
}

export default App;


