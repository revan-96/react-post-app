import React , { useReducer } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import { StyledPushButtonGroup, StyledPushButton } from './TabBarStyles';
import { tabReducer } from '../../reducers/reducers';

const initialState = {pressed: ""};

export function TabBar(props) {
    const [state, dispatch] = useReducer(tabReducer, initialState);

    function handleChange(e) {
        dispatch({type: 'pressed', value: e.target.value});
    }

    return (
        <div>
        <StyledPushButtonGroup onChange={handleChange}>
        {
            props.children.map((component, index) => {
                const props = component.props;
                const pressed = state.pressed === index.toString();
                return (
                    <React.Fragment key={index}>
                        <StyledPushButton value={index} pressed={pressed} onClick={handleChange} {...props}>{props.name}</StyledPushButton>
                    </React.Fragment>
                );
            })
        }
        </StyledPushButtonGroup>
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