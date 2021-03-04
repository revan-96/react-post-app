import React, { useReducer } from 'react';
import PropTypes, { element, func } from 'prop-types';
import searchicon from '../.././assets/search-512.png'
import clearIcon from '../.././assets/img_132045.png'
import { StyledSearchBar, StyledInput, StyledButton, StyledImage} from './SearchBarStyles';

const initialState = {showClear: false, value: ""};

function reducer(state, action) {
    switch (action.type) {
        case 'clearInput':
        return {showClear: false, value: ""};
        case 'inputChange':
            if(action.value) {
                return {showClear: true, value: action.value}                
            } else {
                return {showClear: false, value: action.value};
            }
        default:
        throw new Error();
    }
}

export function SearchBar(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleSubmit(e) {
        e.preventDefault();
        if(props.onSubmit){
            props.onSubmit(state.value);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <StyledSearchBar>
                <StyledButton slot="start">
                    <StyledImage src={searchicon}/>
                </StyledButton>
                <StyledInput {...props} value={state.value} onChange={(e)=> dispatch({type: 'inputChange', value: e.target.value})}/>
                {state.showClear &&
                    <StyledButton slot="end" onClick={()=> dispatch({type: 'clearInput'})}>
                        <StyledImage src={clearIcon}/>
                    </StyledButton>
                }
            </StyledSearchBar>
        </form>
    )
}
SearchBar.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

SearchBar.defaultProps = {
    onSubmit: undefined,
    onChange: undefined
};

export default SearchBar;