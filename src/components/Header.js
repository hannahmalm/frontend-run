import React from 'react'
import {Route, Link} from 'react-router-dom'
import RunsContainer from '../containers/RunsContainer'
import Home from './Home'


const Header = (props) => {
    return(
        <div>
            <Link to='/runs'>All Run Logs</Link>
        </div>
    )
}

export default Header