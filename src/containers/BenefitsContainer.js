import React from 'react'
import Benefits from '../components/Benefits';
import { Route } from 'react-router-dom';

//Container components are primarily concerned with how things work
// They rarely have any HTML markup of their own, aside from a wrapping <div>;
// They are often stateful
// They are responsible for providing data and behavior to their children (usually presentational components).

//This container would be useful to add on future features of the benefits page and to pass props down if it was not hardcoded. 
//Container components. Since they are primarily concerned managing state and actions that mutate the state of an app, they tend to be a good place to connect to the store.

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