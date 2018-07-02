import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import MainComponent from './Components/MainComponent/MainComponent';
import MainProject from './Components/MainComponent/mainProjects';
import ToDo from './Components/MainComponent/ToDo';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"/"} component={MainComponent} >
              <IndexRoute component={MainProject} />
              <Route path={"mytodo"} component={ToDo} />
              <Route path={"myproject"} component={MainProject} />
          </Route>
          <Route path={"myproject-single"} component={MainProject}/>
      </Router>
    );
  }
}

export default App;
