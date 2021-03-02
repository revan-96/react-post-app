import React from 'react';
import './PushButton.scss';
import PropTypes from 'prop-types';

class PushButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var mode = this.props.pressed ? 'PushButton-On': 'PushButton-Off';
        return (
            <button
                type="button"
                className={'PushButton ' + mode}
                {...this.props}
            >
            </button>
        );
    }

}

PushButton.propTypes = {
    pressed: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func
}

PushButton.defaultProps = {
    pressed: false,
    children: '',
    onClick: undefined
}

export default PushButton;