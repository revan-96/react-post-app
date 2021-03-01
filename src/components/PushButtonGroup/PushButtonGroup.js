import React from 'react';
import PropTypes from 'prop-types';
import './PushButtonGroup.scss';
import PushButton from '../PushButton/PushButton';

class PushButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {buttons: props.buttons};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e)
        this.state.buttons.find((button, index)=>{
            return index === e.target.id;
        })
    }

    render() {
        const buttons = this.state.buttons.map((button, index)=>
            <PushButton key={index.toString()} id={index.toString()} label={button.label} pressed={button.pressed} onClick={this.handleClick}></PushButton>
        );
        return (
            <div>{buttons}</div>
        );
    }

}

export default PushButtonGroup;