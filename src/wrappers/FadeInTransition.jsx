import Transition from 'react-transition-group/Transition'
import React, { Component } from "react";

const FadeInTransition = WrappedComponent => class FadeInTransition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entering: false,
            duration: 1000
        };
    }

    componentWillMount() {
        setTimeout(() => this.setState({entering: true}), 50);
    }

    render() {

        const duration = this.state.duration;
        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        };
        const transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
        };

        return (
            <Transition in={this.state.entering} timeout={duration}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <WrappedComponent {...this.props} />
                    </div>
                )}
            </Transition>
        );
    }
};

export default FadeInTransition;


