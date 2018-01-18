import React from 'react';
import glamorous from 'glamorous';

const GlobalSquare = glamorous.div({
    margin: 'auto',
    fontFamily: 'Quicksand',
    display: 'flex',
    fontSize: '14px',
    borderRadius: '5px',
    border: '3px solid #7682F0',
    width: 'fit-content',
    height: '39px'
});

const EmailInput = glamorous.input({
    fontFamily: 'Quicksand',
    width: '10%',
    padding: '0 6px 0 6px',
    ':focus': {
        outline: 'none'
    }
});

const NotifyButton = glamorous.div({
    cursor: 'pointer',
    background: '#7682F0',
    textTransform: 'uppercase',
    color: '#ffffff',
    padding: ' 0 6px 0 10px',
    '-moz-user-select': '-moz-none',
    '-khtml-user-select': 'none',
    '-webkit-user-select': 'none',
    '-o-user-select': 'none',
    width: '30%',
    userSelect: 'none'
});

class LcpNotifyMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions(e) {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        });
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <GlobalSquare>
                <EmailInput type="text" placeholder="Your email" />
                <NotifyButton>NOTIFY ME</NotifyButton>
            </GlobalSquare>
        );
    }
}

export default LcpNotifyMe;
