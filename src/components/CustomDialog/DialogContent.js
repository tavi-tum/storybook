import styled from 'styled-components'

export default styled.div`
    position: fixed;
    box-sizing: border-box;
    width: calc(100% - 40px);
    max-width: 800px;
    background: #F9EED2;
    z-index: 1000;
    right: 0;
    top: ${props => props.open ? '10%' : '-1000px'};
    opacity: ${props => props.open ? 1 : 0};
    left: 0;
    margin: 20px auto;
    transition: opacity 350ms ease-in;
    transition-delay: 0.2s;
`
