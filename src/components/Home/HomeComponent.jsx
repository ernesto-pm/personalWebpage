import React, {Component} from 'react'
import FadeTransition from '../../wrappers/FadeInTransition'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'

class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            entering: false
        }
    }

    componentWillMount() {
        setTimeout( () => this.setState({entering: true}),500);
    }

    render() {
        return(
            <div className="home-container">
                <HomeHeader/>
                <HomeContent/>
            </div>
        )
    };

}

export default HomeComponent;