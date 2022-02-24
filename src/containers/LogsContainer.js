//Typically containers have state with multiple functions
//Log container needs access to Run that is rendering the container --> This container will differ based on the run
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