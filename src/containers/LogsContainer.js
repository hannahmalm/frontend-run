//Typically containers have state with multiple functions
import React from 'react'
import LogForm from '../components/LogForm';
import LogsList from '../components/LogList';

class LogsContainer extends React.Component {
    render() {
        return(
            <div>
                <LogForm/>
                <LogsList/>
            </div>
        )
    }
}

export default LogsContainer;