import React, { Component } from 'react';

class LetterButton extends Component {
    render() {
        return (
            <button>
               {this.props.letter} 
            </button>
        );
    }
}

export default LetterButton;
 