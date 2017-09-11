import Transition from 'react-transition-group/Transition';
import React from 'react'

const duration = 5000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                I'm A fade Transition!
            </div>
        )}
    </Transition>
);

export default Fade;