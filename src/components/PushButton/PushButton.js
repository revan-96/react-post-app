import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledPushButton = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-size: 14px;
    padding: 11px 20px;
    box-shadow: 0 9px #1ea8fdbb;
    color: white;
    background-color: #1ea7fd;
    box-shadow: ${props => props.pressed? "0 3px #1ea8fdbb": "0 9px #1ea8fdbb" };
    transform: ${props => props.pressed? "translateY(6px)": "" };
`

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