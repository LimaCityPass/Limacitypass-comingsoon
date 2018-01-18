import React, { PropTypes } from 'react';
import glamorous from 'glamorous';

class LcpBackground extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.background = this.props.background;
    }
    render() {
        const backStyle = {
            position: 'relative',
            backgroundImage: `url(${this.background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover',
            height: '-webkit-fill-available',
        };

        return <div style={backStyle}>{this.props.children}</div>;
    }
}

export default LcpBackground;
