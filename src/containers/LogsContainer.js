//Typically containers have state with multiple functions
//Log container needs access to Run that is rendering the container --> This container will differ based on the run
import React from 'react'
import LogForm from '../components/LogForm';
import LogsList from '../components/LogList';

//to render the correct log in the list, pass the props for the runs logs
  //run that log will be associated with
class LogsContainer extends React.Component {
    render() {
        return(
            <div>
                
                <LogForm logs={this.props.run}/>
                <LogsList logs={this.props.run && this.props.run.logs}/>
            </div>
        )
    }
}

export default LogsContainer;