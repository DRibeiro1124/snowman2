import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import LetterButton from './Components/LetterButton';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedLetter: []
    }
  }
  
  addLetterToPickedArray = (letter) => {
    const _NewPickedLetters = this.state.pickedLetter.slice()
    _NewPickedLetters.push(letter)
    this.setState({
      pickedLetter: _NewPickedLetters 
    })
  }

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
            return <LetterButton
              key={i}
              letter= {letter}
              addLetterHandler={this.addLetterToPickedArray}/> 
          })}
          
          <section className="letter-picked-container">
            <span>Letters that have been picked:</span>
            {this.state.pickedLetter.map((letter, i) => {
              return <div key={i}>{letter}</div>
            })}
          </section>
        </section>
      </div>
    );
  }
}

export default App;

