import React from 'react'
import Home from '../components/Home';
import { Route } from 'react-router-dom';
import Footer from '../components/Footer';

class HomeContainer extends React.Component {
    render() {
        return(
            <div>
                <Route exact path='/' component={Home}/>
                
            </div>
            
        )
        
    }
}

export default HomeContainer;