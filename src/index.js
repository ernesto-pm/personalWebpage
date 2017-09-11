import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

function render(Component) {
    ReactDOM.render(
        <BrowserRouter>
            <Component/>
        </BrowserRouter>,
        document.getElementById("root")
    );
}

render(App);


registerServiceWorker();
