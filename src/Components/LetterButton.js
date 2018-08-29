import React, { Component } from 'react';

class LetterButton extends Component {
    render() {
        return (
            <button className="letter-button"> 
                {this.props.letter} 
            </button>
        );
    }
}

export default LetterButton;
 