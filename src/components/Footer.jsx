import React from 'react';
import glamorous from 'glamorous';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from 'react-fa';
import './styles/FooterComingSoon.css'
import Heart from '../assets/heart.svg'

const QuickFontWithBackground = glamorous.div({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    backgroundImage:
        'linear-gradient(-180deg, rgba(77,77,77,0.00) 0%, #221A16 100%)',
    minHeight: '30px',
    color: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
});

const Margin = glamorous.div ({
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '10px'
});

const AlignToBottom = glamorous.div({
    bottom: 0
});

class LcpFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <QuickFontWithBackground>
                <Row between={'md'} bottom="lg" center="xs">
                    <Col xs={12} sm={6} md={6} lg={6} className='alignresponsiveleft' >
                        <Margin>
                            {/* &lt; Made with <img src={Heart} style={{'height':'12px'}}/> by MGNG &#62; */}
                        </Margin>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} className='alignresponsiveright' >
                        <Margin>
                            <Icon name="envelope" style={{ marginRight: '5px' }} />
                            hello@limacitypass.com
                        </Margin>

                    </Col>
                </Row>
            </QuickFontWithBackground>
        );
    }
}

export default LcpFooter;
