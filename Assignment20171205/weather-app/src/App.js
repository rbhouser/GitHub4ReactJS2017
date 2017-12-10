import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar'

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        { this.props.children }
      </div>
    );
  }
}

export default App;
