import styled from 'styled-components'

export default styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: ${props => props.open ? 0 : '-10000px'};
    width: 100%;
    height: 100%;
    z-index: 1000;
    opacity: ${props => props.open ? 1 : 0};
    left: 0;
`
