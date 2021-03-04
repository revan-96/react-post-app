import React from 'react';
import PropTypes from 'prop-types';
import { StyledPushButton } from './PushButtonStyles';

class PushButton extends React.Component {
    render() {
        return (
            <StyledPushButton {...this.props}></StyledPushButton>
        );
    }

}

PushButton.propTypes = {
    pressed: PropTypes.bool,
    children: PropTypes.string,
    value: PropTypes.number,
    onClick: PropTypes.func
}

PushButton.defaultProps = {
}

export default PushButton;