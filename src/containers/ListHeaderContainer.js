import React from 'react'
import RunListHeader from '../components/RunListHeader';
import { Route } from 'react-router-dom';

class ListHeaderContainer extends React.Component {
    render() {
        return(
            <div>
                <Route exact path='/runs' component={RunListHeader}/>
            </div>
        )
    }
}

export default ListHeaderContainer;