import styled from 'styled-components';

export const StyledSearchBar = styled.div`
position: relative;
width: 400px;
height: 30px;
`;

export const StyledInput = styled.input.attrs(props => ({
// we can define static props
placeholder: "Search Posts",
type: "text",
}))`
position: absolute;
background: url(${props=>props.searchicon}) no-repeat scroll 5px 5px;
background-size: 20px 20px; 
padding-left: 30px;
padding-right: 30px;
width: 75%;
height: 100%;
border: 1px solid black;
`;

export const StyledButton = styled.button`
background: none;
position: absolute;
border: none;
cursor: pointer;
top: 20%;
left: ${props=>props.slot === 'end' ? "81%": "0%"};

&:focus {
    outline: none;
    box-shadow: none;
}
`;

export const StyledImage = styled.img`
height: 20px;
width: 20px;
`