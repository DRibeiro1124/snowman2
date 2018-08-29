import React, { Component } from 'react';
import logo from './logo.svg';
import photo0 from './images/step_0.png';
import photo1 from './images/step_1.png';
import photo2 from './images/step_2.png';
import photo3 from './images/step_3.png';
import photo4 from './images/step_4.png';
import photo5 from './images/step_5.png';
import photo6 from './images/step_6.png';
import photo7 from './images/step_7.png';

import './App.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={photo0} className="App-logo" alt="logo" />
          <img src={photo1} className="App-logo" alt="logo" />
          <img src={photo2} className="App-logo" alt="logo" />
          <img src={photo3} className="App-logo" alt="logo" />
          <img src={photo4} className="App-logo" alt="logo" />
          <img src={photo5} className="App-logo" alt="logo" />
          <img src={photo6} className="App-logo" alt="logo" />
          <img src={photo7} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
