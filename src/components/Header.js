import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'
import RunsContainer from '../containers/RunsContainer'
import Home from './Home'
import { Test } from './Test'


function Header (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand">Run Log</a>
         <div className="navBar" id="navbarNav">
           <ul className="navbar-nav">
             <a className="navbar-brand">  <Link to='/'>Home</Link></a>
             <a className="navbar-brand"> <Link to='/runs'> All Run Logs </Link></a>

           </ul>
         </div>
       </nav>
    );
  }

export default Header