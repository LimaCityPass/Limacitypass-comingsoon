import React from 'react';
import glamorous from 'glamorous';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from 'react-fa';

const QuickFontWithBackground = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '14px',
    backgroundImage:
        'linear-gradient(-180deg, rgba(77,77,77,0.00) 0%, #221A16 100%)',
    minHeight: '100px',
    color: 'white'
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
                    <Col xs={12} md={3} lg={3}>
                        © {new Date().getFullYear()} Lima City Pass, Inc. All
                        rights reserved.
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Icon name="envelope" style={{ marginRight: '5px' }} />
                        hello@limacitypass.com
                    </Col>
                </Row>
            </QuickFontWithBackground>
        );
    }
}

export default LcpFooter;
