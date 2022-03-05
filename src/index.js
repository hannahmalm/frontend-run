//---BASIC IMPORTS------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//---STORE IMPORTS---
import {createStore, applyMiddleware, compose} from 'redux' //compose combines all the different middlewares
import thunk from 'redux-thunk' //lets you make asynch calls to the backend used for any fetch calls 
import {Provider} from 'react-redux' //Library used for integrating Redux and React together
//---ROUTER---
import { BrowserRouter } from 'react-router-dom';
//----REDUCERS----
import runReducer from './reducers/runReducer'; //If there are multiple reducers --> use combine Reducers to make a rootReducer
//If this application expands in the future, add in all reducers here and combine reducers
//----REDUX STATE BASICS
  //Single Source of Truth - global state is stored as an object inside single store
  //State is Read-Only --> ONLY way to change the state is to dispatch an action
  //Changes are made with Pure reducer functions

//----COMPOSE ENHANCERS-----------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Compose is used when you want to pass multiple store enhancers to the store
//The only store enhancer which is supplied with Redux by default is applyMiddleware
//create a reducer, applyMiddleware and thunk
//reducer tells us what we want in our store

//----STORE-------
//The Redux Store runs the root reducer(or in this case runReducer), whenever an action is dispatched
//createstore takes a REDUCER as an argument
let store = createStore(runReducer, composeEnhancers(applyMiddleware(thunk)))


//-----PROVIDER AND BROWSER ROUTER----------------
//wrap App in Provider --> gives App and all its children access to the store
//Wrap App in BrowserRouter --> gives App and all its children access to create Routes --> Imported at the top
//Always call ReactDOM.render(App) to tell React to start rendering root App component --> This is what will load first
//App can be thought of as a container --> Additional containers are rendered within App.js
//Wrapping the app with <Provider store={store} enables all components to use the store
//Global state will go into the Redux Store --> Local state will stay in React components (for example, in forms)
//Pass the provider the store
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

