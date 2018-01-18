import React from 'react';
import glamorous from 'glamorous';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from 'react-fa';
import './styles/FooterComingSoon.css'

const QuickFontWithBackground = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '14px',
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
                            © {new Date().getFullYear()} Lima City Pass, Inc. All
                        rights reserved.
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
