import React, { Component } from 'react';

class LetterButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.addLetterHandler(this.props.letter)} className="letter-button"> 
                {this.props.letter} 
            </button>
        );
    }
}

export default LetterButton;
 

