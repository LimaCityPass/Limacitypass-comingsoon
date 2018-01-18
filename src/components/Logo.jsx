import React from 'react';
import glamorous from 'glamorous';
import LcpLogoImg from '../assets/lima_logo.png';

const LogoImg = glamorous.img({
    width: 'auto',
    height: '340px',
    'margin-left': 'auto',
	'margin-right': 'auto',
	display: 'block'
});

const ComingSoonMessage = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '24px',
    margin: 'auto',
    width: 'fit-content'
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
                    <ComingSoonMessage style={{ 'font-size': this.sizeFont }}>
                        Get ready for a new way to live Lima
                    </ComingSoonMessage>
                </AlignMiddle>
            </div>
        );
    }
}
