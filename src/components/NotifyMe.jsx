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
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',
    fontSize: '14px',
    padding: '0 12px 0 12px',
    border: 'none',
    width: '280px',
    borderRadius: '5px',
    ':focus': {
        outline: 'none'
    },
    [mediaQueries.phone]: {
        width: '190px'
    }
});

const NotifyButton = glamorous.button({
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
    },
    ':focus': {
        outline: 'none'
    },
    [mediaQueries.phone]: {
        padding: ' 0 1px 0 4px',
        width: '100px'
    }
});

const NotifyForm = glamorous.form({
    background: '#7682F0',
    userSelect: 'none',
    '-webkit-touch-callout': 'none',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    margin: 'auto',
    fontFamily: 'Poppins',
    display: 'flex',
    fontSize: '14px',
    borderRadius: '5px',
    border: '3px solid #7682F0',
    width: 'fit-content',
    height: '39px',
    ':focus': {
        outline: 'none'
    },
    ':active': {
        border: '3px solid #4D559E'
    }
});

class LcpNotifyMe extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Content>
                <NotifyForm method="POST" action="https://formspree.io/hello@limacitypass.com">

                        <EmailInput
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        <NotifyButton type="submit">NOTIFY ME</NotifyButton>

                    </NotifyForm>

            </Content>
        );
    }
}

export default LcpNotifyMe;
