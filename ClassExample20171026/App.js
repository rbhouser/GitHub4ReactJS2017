import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    debugger
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Falcon! Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started go eat subway, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
