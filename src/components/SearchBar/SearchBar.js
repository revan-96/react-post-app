import React from 'react';
import styled from 'styled-components'
import searchicon from './search-512.png'

const StyledSearchBar = styled.div`
    // display: grid;
    // grid-template-areas:
    // 'search-icon input clear-button';
`;
const StyledInput = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
}))`
    background: url(${props=>props.searchicon}) no-repeat scroll 7px 7px;
    background-size: 10px 10px; 
    padding-left: 20px
`;
class SearchBar extends React.Component {
    render() {
        console.log(searchicon)
        return (
            <StyledSearchBar searchicon={searchicon}>
                <StyledInput {...this.props} searchicon={searchicon}/>
            </StyledSearchBar>
        )
    }
}

export default SearchBar;