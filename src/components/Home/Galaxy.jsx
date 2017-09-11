import React, {Component} from 'react'

class Galaxy extends Component {

    constructor(props){
        super(props);
        this.animate = this.animate.bind(this);
    }

    componentDidMount(){
        console.log("Initializing Galaxy");
        this.initHeader();
    }

    initHeader() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const target = {x: width/2, y: height/2};
        const largeHeader = document.getElementById('home');
        largeHeader.style.height = height+'px';
        this.animate();
    }

    animate() {
        console.log("Animating Galaxy");
        const width = window.innerWidth;
        const height = window.innerHeight;
        const canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,width,height);
        requestAnimationFrame(this.animate);
    }


    render() {
        return(
            <canvas id="demo-canvas"/>
        )
    };

}

export default Galaxy;