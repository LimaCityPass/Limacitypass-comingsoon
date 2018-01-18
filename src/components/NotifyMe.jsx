import React from 'react';
import glamorous from 'glamorous';

const mediaQueries = {
    phone: '@media only screen and (max-width: 500px)'
};

const Content = glamorous.div({
    margin: '30px 0 30px 0'
});

const GlobalSquare = glamorous.div({
    margin: 'auto',
    fontFamily: 'Quicksand',
    display: 'flex',
    fontSize: '14px',
    borderRadius: '5px',
    border: '3px solid #7682F0',
    width: 'fit-content',
    height: '39px',
    ':active': {
        border: '3px solid #4D559E'
    }
});

const EmailInput = glamorous.input({
    fontFamily: 'Quicksand',
    fontSize: '14px',
    padding: '0 6px 0 6px',
    border: 'none',
    width: '280px',
    ':focus': {
        outline: 'none'
    },
    [mediaQueries.phone]: {
        width: '190px'
    }
});

const NotifyButton = glamorous.div({
    cursor: 'pointer',
    border: 'none',
    background: '#7682F0',
    textTransform: 'uppercase',
    color: '#ffffff',
    padding: ' 0 16px 0 20px',
    '-moz-user-select': '-moz-none',
    '-khtml-user-select': 'none',
    '-webkit-user-select': 'none',
    '-o-user-select': 'none',
    userSelect: 'none',
    textAlign: 'center',
    lineHeight: '39px',
    '-webkit-touch-callout': 'none',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    ':active': {
        background: '#4D559E',
        border: 'none',
        padding: ' 0 10px 0 14px'
    }
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
            <Content>
                <GlobalSquare>
                    <EmailInput
                        type="text"
                        placeholder="Your email"
                    />
                    <NotifyButton>NOTIFY ME</NotifyButton>
                </GlobalSquare>
            </Content>
        );
    }
}

export default LcpNotifyMe;
