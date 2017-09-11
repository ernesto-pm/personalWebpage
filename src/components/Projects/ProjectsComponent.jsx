import React, {Component} from 'react'
import FadeTransition from '../../wrappers/FadeInTransition'

class ProjectsComponent extends Component {
    render() {
        return(
            <div className="container">
                <div className="col-md-12 text-center">
                    <h1>Projects</h1>
                </div>
            </div>
        )
    };
}

export default FadeTransition(ProjectsComponent);