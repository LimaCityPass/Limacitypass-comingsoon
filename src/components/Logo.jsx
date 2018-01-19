import React from 'react';
import glamorous from 'glamorous';
import LcpLogoImg from '../assets/logo_lcp.png';

const mediaQueries = {
    phone: '@media only screen and (max-width: 500px)'
};

const Content = glamorous.div({
    margin: '15px 0 10px 0'
});

const LogoImg = glamorous.img({
    width: 'auto',
    'margin-left': 'auto',
    'margin-right': 'auto',
    display: 'block',
    '-webkit-filter': 'drop-shadow(5px 6px 7px rgba(0,0,0,0.6))  drop-shadow(6px 6px 20px rgba(0,0,0,0.5))'
});

const ComingSoonMessage = glamorous.div({
    fontFamily: 'Poppins',
    color: '#ffffff',
    fontWeight: '200',
    fontSize: '24px',
    margin: 'auto',
    width: 'fit-content',
    textAlign: 'center',
    [mediaQueries.phone]: {
        fontSize: '18px'
    }
});

const AlignMiddle = glamorous.div({
    margin: 'auto'
});

export default class LogoContent extends React.Component {
    constructor(props) {
        super(props);
        this.heightImg = props.heightImg;
        this.sizeFont = props.sizeFont;
    }
    render() {
        return (
            <div>
                <AlignMiddle>
                    <LogoImg
                        src={LcpLogoImg}
                        style={{ height: this.heightImg }}
                    />
					<Content>
						<ComingSoonMessage>
	                        Get ready for a new way to live Lima
	                    </ComingSoonMessage>
					</Content>
                </AlignMiddle>
            </div>
        );
    }
}
