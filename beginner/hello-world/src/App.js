import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Subpage.css';

class App extends Component {
  // now I create render for Components
  /*render() {
    return (<div className="Spec">We create a new and new world</div>);
  } */

  //render content to show
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo-second" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
