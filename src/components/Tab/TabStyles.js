import styled from 'styled-components'

export const StyledTab = styled.div`
    display: ${props => props.active ? "block": "none"};
`