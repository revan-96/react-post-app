import React from 'react';
import PropTypes from 'prop-types';
import PushButton from '../PushButton/PushButton';

class PushButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {pressed: "", prev: ""};
        this.onChange = props.onChange;
    }

    handleChange(e) {
        if(this.state.prev === e.target.value)
            return;
        this.setState({pressed: e.target.value, prev: e.target.value});
        this.onChange(e);
    }

    render() {
        return (
            <div>
            {
                this.props.children.map((button, index) => {
                    const props = button.props;
                    const pressed = this.state.pressed === index.toString();
                    const Button = button.type;
                    return <Button key={index} value={index} pressed={pressed} onClick={this.handleChange} {...props}></Button>;
                })
            }                
            </div>
        );
    }

}

PushButtonGroup.propTypes = {
    children: PropTypes.arrayOf((elements, key, componentName, location, propFullName) => {
        if(elements[key].type != PushButton) {
            console.log('invalid')
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }),
    onChange: PropTypes.func
}

PushButtonGroup.defaultProps = {
}

export default PushButtonGroup;