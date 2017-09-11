import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent'
import ProjectsComponent from './components/Projects/ProjectsComponent'

class App extends Component {
  render() {
    return (
        <div>

            <Route exact path="/" render={(props) => (
                <HomeComponent {...props} title="Hello"/>
            )}/>

            <Route exact path="/projects" render={(props) => (
                <ProjectsComponent {...props} title="Hello"/>
            )}/>

        </div>
    );
  }
}

export default App;
