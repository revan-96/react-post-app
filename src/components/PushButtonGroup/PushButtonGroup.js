import React from 'react';
import PropTypes from 'prop-types';
import './PushButtonGroup.scss';

class PushButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = this.props.children;
        console.log(this.buttons)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e);
    }

    render() {
        return (
            <div {...this.props}></div>
        );
    }

}

PushButtonGroup.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node.isRequired),
}

PushButtonGroup.defaultProps = {
    children: null,
}

export default PushButtonGroup;