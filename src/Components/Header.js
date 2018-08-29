import React, { Component } from 'react';
import photo0 from '../images/step_0.png';
import photo1 from '../images/step_1.png';
import photo2 from '../images/step_2.png';
import photo3 from '../images/step_3.png';
import photo4 from '../images/step_4.png';
import photo5 from '../images/step_5.png';
import photo6 from '../images/step_6.png';
import photo7 from '../images/step_7.png';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={photo0} className="App-logo" alt="logo" />
                    <img src={photo1} className="App-logo" alt="logo" />
                    <img src={photo2} className="App-logo" alt="logo" />
                    <img src={photo3} className="App-logo" alt="logo" />
                    <img src={photo4} className="App-logo" alt="logo" />
                    <img src={photo5} className="App-logo" alt="logo" />
                    <img src={photo6} className="App-logo" alt="logo" />
                    <img src={photo7} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default Header;
