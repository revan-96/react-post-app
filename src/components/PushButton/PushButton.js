import React from 'react';
import './PushButton.scss';

class PushButton extends React.Component {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.onClick = props.onClick;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if(this.props.pressed) {
            return;
        } 
        e.target.id = this.props.id;
        this.onClick(e);
    }

    render() {
        var mode = this.props.pressed ? 'PushButton-On': 'PushButton-Off';
        return (
            <button
                type="button"
                className={'PushButton ' + mode}
                onClick={this.handleClick}
            >
                {this.label}
            </button>
        );
    }

}

export default PushButton;