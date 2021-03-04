import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import PushButton from '../PushButton/PushButton';
import { StyledPushButton, StyledPushButtonGroup } from './PushButtonGroupStyles';

const initialState = {pressed: ""};

function reducer(state, action) {
    switch (action.type) {
        case 'pressed':
        return {...state, pressed: action.value};
        default:
        throw new Error();
    }
}

export function PushButtonGroup (props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        dispatch({type: 'pressed', value: e.target.value});
        if(props.onChange){
            props.onChange(e);
        }
    }

    return (
        <StyledPushButtonGroup>
        {
            props.children.map((button, index) => {
                const props = button.props;
                const pressed = state.pressed === index.toString();
                const Button = button.type;
                return <StyledPushButton key={index}><Button value={index} pressed={pressed} onClick={handleChange} {...props}></Button></StyledPushButton>;
            })
        }                
        </StyledPushButtonGroup>
    );

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