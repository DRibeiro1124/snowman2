import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import LetterButton from './Components/LetterButton';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <p className="App-intro">
          <span>Let's play the snowman game!</span>
        </p>
        <section className="letter-container">
          {ALPHABET.map((letter, i) => {
            return <LetterButton key={i}letter= {letter} /> 
          })}
        </section>
      </div>
    );
  }
}

export default App;
