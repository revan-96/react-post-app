import React , { useReducer } from 'react';
import PropTypes from 'prop-types';
import PushButtonGroup from '../PushButtonGroup/PushButtonGroup';
import PushButton from '../PushButton/PushButton';
import Tab from '../Tab/Tab';

const initialState = {pressed: ""};

function reducer(state, action) {
    switch (action.type) {
        case 'pressed':
        return {...state, pressed: action.value};
        default:
        throw new Error();
    }
}

export function TabBar(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        dispatch({type: 'pressed', value: e.target.value});
    }

    return (
        <div>
        <PushButtonGroup onChange={handleChange}>
        {
            props.children.map((component, index) => {
                console.log(component)
                const props = component.props;
                return <PushButton key={index}>{props.name}</PushButton>
            })
        }
        </PushButtonGroup>
        <br/>
        {
            props.children.map((component, index) => {
                const props = component.props;
                const Component = component.type;
                return <Component key={index} active={state.pressed === index.toString()} {...props}></Component>;
            })
        }                
        </div>
    );
}

TabBar.propTypes = {
    children: PropTypes.arrayOf((elements, key, componentName, location, propFullName) => {
        if(elements[key].type != Tab) {
            console.log('invalid')
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }),
    onChange: PropTypes.func
}

TabBar.defaultProps = {
    onChange: undefined
}


export default TabBar;