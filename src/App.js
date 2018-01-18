import React, { Component } from 'react';
import LcpFooter from './components/Footer';
import LcpLogoContent from './components/Logo';
import LcpNotifyMe from './components/NotifyMe';
import LcpBackground from './components/Background';
import glamorous from 'glamorous';

import './styles/app.css';

import limaBackground from './assets/lima_coming_background.png';

class App extends Component {
    render() {
        return (
            <LcpBackground background={limaBackground}>
                <LcpLogoContent heightImg={200}/>
                <LcpNotifyMe />
                <LcpFooter />
            </LcpBackground>
        );
    }
}

export default App;
