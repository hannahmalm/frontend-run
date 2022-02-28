import React from 'react'
import RunsContainer from './RunsContainer';
import Home from '../components/Home';
import { Route } from 'react-router-dom';

class HomeContainer extends React.Component {
    render() {
        return(
            <div>
                <Route exact path='/' component={Home}/>
                {/* <LogForm run={this.props.run}/>
                <LogsList logs={this.props.run && this.props.run.logs}/> */}
            </div>
        )
    }
}

export default HomeContainer;