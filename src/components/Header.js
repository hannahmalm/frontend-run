import React from 'react'
import {Route, Link} from 'react-router-dom'
import RunsContainer from '../containers/RunsContainer'
import Home from './Home'


const Header = (props) => {
    return(
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Run Log</a>
  <div className="navBar" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to='/'> Home </Link>
      </li>
      <li className="nav-item">
      <Link to='/runs'> All Run Logs </Link>
     </li>
    </ul>
  </div>
</nav>
        // <div>
        //     <Link to='/runs'>All Run Logs</Link>
        // </div>
    )
}

export default Header