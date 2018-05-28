import React, { Component } from 'react';
import './App.css';
import MainProject from './Components/MainComponent/mainProjects';

class App extends Component {
  render() {
    return (
      <div className="ProjectManager">
        <header className="App-header">
          <h1 className="App-title">Welcome to Project Manager</h1>
        </header>
        <MainProject />
      </div>
    );
  }
}

export default App;
