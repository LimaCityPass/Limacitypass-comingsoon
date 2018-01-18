import React, { Component } from 'react';
import LcpFooter from './components/Footer';
import LcpLogoContent from './components/Logo';
import LcpNotifyMe from './components/NotifyMe';
import LcpBackground from './components/Background';
import glamorous from 'glamorous';

import './styles/app.css';

import limaBackground from './assets/lima_coming_background.png';

const AlignVertically = glamorous.div ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
});

class App extends Component {
    render() {
        return (

            <LcpBackground background={limaBackground}>
                <AlignVertically>
                    <LcpLogoContent heightImg={200}/>
                    <LcpNotifyMe />
                </AlignVertically>

                <LcpFooter />
            </LcpBackground>
        );
    }
}

export default App;
