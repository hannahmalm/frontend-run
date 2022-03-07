import React from 'react'
import { Link} from 'react-router-dom'
//Stateless - Presentational


//Could have used NavLink but choose to use Link with the bootstrap HTML
//className instead of class because class is a reserved keyword
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand">Run Journal</a>
         <div className="navBar" id="navbarNav">
           <ul className="navbar-nav">
             <a className="navbar-brand">  <Link to='/'>Home</Link></a>
             <a className="navbar-brand"> <Link to='/runs'> All Run Journals </Link></a>
           </ul>
         </div>
       </nav>
    );
  }

export default Header