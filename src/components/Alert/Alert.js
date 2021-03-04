import React from 'react';
import { StyledAlert } from './AlertStyles';

class Alert extends React.Component {

    render() {
        return (
            <StyledAlert>{this.props.children}</StyledAlert>
        );
    }
}

export default Alert;