import styled from 'styled-components';

export const StyledPostView = styled.div`
    position: relative;
    background-color: lightgray;
    height: 58vh;
    overflow: auto;
    padding: 5%;
`
export const StyledPostCont = styled.div`
    padding-bottom: 5%;
    }
`

export const StyledPost = styled.div`
    background-color: white;
    padding: 5%;
    min-height: ${props=>props.expand ? "60vh" : "25vh"};
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 2px 2px 5px grey;

    &:hover {
        cursor: pointer;
    }
`
