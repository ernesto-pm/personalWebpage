import React, {Component} from 'react'
import FadeTransition from '../../wrappers/FadeInTransition'
import {Link} from 'react-router-dom'


class HomeContent extends Component {
    render() {
        return(
            <div>
                <div className="home-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="subheader white">Software Developer Engineer</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    };

}

export default HomeContent;