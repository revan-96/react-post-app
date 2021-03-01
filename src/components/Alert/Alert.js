import React from 'react';
import './Alert.scss';

class Alert extends React.Component {

    render() {
        return (
            <p className="Alert">{this.props.message}</p>
        );
    }
}

export default Alert;