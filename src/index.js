import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
//---STORE---
import {createStore, applyMiddleware, compose} from 'redux' //compose combines all the different middlewares
import thunk from 'redux-thunk' //lets you make asynch calls to the backend used for any fetch calls 
import {Provider} from 'react-redux'
//---ROUTER---
import { BrowserRouter as Router } from 'react-router-dom';
//----REDUCERS----
import runReducer from './reducers/runReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create a reducer, applyMiddleware and thunk
//reducer tells us what we want in our store
let store = createStore(runReducer, composeEnhancers(applyMiddleware(thunk)))


//wrap App in Provider --> gives App and all its children access to the store
//Wrap App in Router --> gives App and all its children access to create Routes --> You need to import this at top
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
