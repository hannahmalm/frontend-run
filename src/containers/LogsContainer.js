//Typically containers have state with multiple functions
import React from 'react'
import LogForm from '../components/LogForm';

class LogsContainer extends React.Component {
    render() {
        return(
            <div>
                <LogForm/>
            </div>
        )
    }
}

export default LogsContainer;