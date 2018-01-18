import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import './styles/NotifyButton.css'

class NotifyButton extends Component {
    render() {
        return (
            <div className='globalsquare'>
                <input className='emailinput' type="text" placeholder="Your email"></input>
                <div className='notifybutton unselectable'>NOTIFY ME</div>
            </div>
        );
    }
}

export default NotifyButton;
