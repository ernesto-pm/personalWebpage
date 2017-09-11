import React, {Component} from 'react'
import FadeTransition from '../../wrappers/FadeInTransition'
import {Link} from 'react-router-dom'


class HomeHeader extends Component {
    render() {
        return(
            <div className="home-header">
                <div className="home-insideHeader">
                    <span className="home-mainTitle">Ernesto Pérez</span>
                    <div className="home-links">
                        <ul>
                            <a href="https://github.com/ernesto-pm" target="_blank">
                                <i className="fa fa-github-alt fa-lg home-icon"/>
                            </a>
                            <a href="http://stackoverflow.com/users/6054466/ernesto-pm" target="_blank">
                                <i className="fa fa-stack-overflow fa-lg home-icon"/>
                            </a>
                            <a href="https://mx.linkedin.com/in/ernesto-pm" target="_blank">
                                <i className="fa fa-linkedin fa-lg home-icon"/>
                            </a>
                            <a href="skype:ernesto.perez.martinez?add">
                                <i className="fa fa-skype fa-lg home-icon"/>
                            </a>
                            <a href="mailto:ernestopm20@gmail.com">
                                <i className="fa fa-at fa-lg home-icon"/>
                            </a>
                            <a href="" target="_blank">
                                <i className="fa fa-file fa-lg home-icon"/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

}


/*

<div className="home" id="home">
                <span className="home-mainTitle">Ernesto Pérez</span>
                <div className="home-links">
                    <ul>
                        <a href="https://github.com/ernesto-pm" target="_blank">
                            <i className="fa fa-github-alt fa-lg home-icon"/>
                        </a>
                        <a href="http://stackoverflow.com/users/6054466/ernesto-pm" target="_blank">
                            <i className="fa fa-stack-overflow fa-lg home-icon"/>
                        </a>
                        <a href="https://mx.linkedin.com/in/ernesto-pm" target="_blank">
                            <i className="fa fa-linkedin fa-lg home-icon"/>
                        </a>
                        <a href="skype:ernesto.perez.martinez?add">
                            <i className="fa fa-skype fa-lg home-icon"/>
                        </a>
                        <a href="mailto:ernestopm20@gmail.com">
                            <i className="fa fa-at fa-lg home-icon"/>
                        </a>
                        <a href="" target="_blank">
                            <i className="fa fa-file fa-lg home-icon"/>
                        </a>
                    </ul>
                </div>
            </div>

 */

export default HomeHeader;