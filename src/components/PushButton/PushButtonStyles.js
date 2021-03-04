import styled from 'styled-components'

export const StyledPushButton = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: .5em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-size: 14px;
    padding: 11px 20px;
    color: white;
    background-color: #1ea7fd;
    box-shadow: ${props => props.pressed? "0 2px #027dca": "0 7px #1ea8fdbb" };
    transform: ${props => props.pressed? "translateY(5px)": "" };

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #1576b3;
    }

    &:active {
        box-shadow: #1576b3;
    }
`