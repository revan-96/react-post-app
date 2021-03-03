import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div {...this.props}>{this.props.children}</div>
        );
    }

}

Tab.propTypes = {
}

Tab.defaultProps = {
}

export default Tab;