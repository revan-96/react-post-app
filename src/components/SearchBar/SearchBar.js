import React, { useReducer } from 'react';
import PropTypes, { element, func } from 'prop-types';
import searchicon from '../.././assets/search-512.png'
import clearIcon from '../.././assets/img_132045.png'
import { StyledSearchBar, StyledInput, StyledButton, StyledImage} from './SearchBarStyles';
import { searchReducer } from '../../reducers/reducers';

const initialState = {showClear: false, value: ""};

export function SearchBar(props) {
    const [state, dispatch] = useReducer(searchReducer, initialState);

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