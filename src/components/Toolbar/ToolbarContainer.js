import styled from 'styled-components'

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.lastChild ? 'flex-end' : 'flex-start'};
    width: 100%;
    box-sizing: border-box;

    > div {
        margin-left: ${props => props.lastChild ? '15px' : '0'};
        margin-right: ${props => props.lastChild ? '0' : '15px'};
    }

    @media (max-width: ${props => props.breakpoints ? props.breakpoints.mobile : ''}) {
        display: none;
    }
`
