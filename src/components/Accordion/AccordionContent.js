import styled from 'styled-components'

export default styled.div`
    max-height: ${props => props.open ? '10000vh' : '0'};
    overflow: ${props => props.open ? 'visible' : 'hidden'};
    padding: ${props => props.open ? '20px 0' : '0'};
    transition: padding 500ms ease;
    background-color: transparent;
    line-height: 26px;
    font-size: 14px;
    color: #444444;
`
