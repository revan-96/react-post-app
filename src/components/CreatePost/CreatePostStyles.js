import styled from 'styled-components';

export const StyledCreatePost = styled.div`
    overflow-y: hidden;
    overflow-x: hidden;
    overflow-wrap: break-word;
`

export const StyledTitleBox = styled.textarea`
    width: 50%;
    border: 1px solid var(--border);
    --border: ${props=>props.Invalid ? 'red' : 'black'};
`

export const StyledBodyBox = styled.textarea`
    width: 80%;
    min-height: 35vh;
    border: 1px solid var(--border);
    --border: ${props=>props.Invalid ? 'red' : 'black'};
`

export const StyledAlert = styled.div`
    display: block;
    z-index: 1;
    width: 20%;
    position: absolute;
    left: 30%;
`