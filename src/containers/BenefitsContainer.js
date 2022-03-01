import React from 'react'
import Benefits from '../components/Benefits';
import { Route } from 'react-router-dom';

class BenefitsContainer extends React.Component {
    render() {
        return(
            <div>
                 <Route exact path='/benefits' component={Benefits}/>
            </div>
        )
    }
}

export default BenefitsContainer;