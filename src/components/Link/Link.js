import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    text-decoration: none;
    outline: none;
    z-index: 1;
    
    ${props => props.active ? `
    color: #fff;
    background-color: #16283F;
    padding: 2px 7px;
    `: ''}
    
    ${props => props.fullSize ? `
    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;   
    }
    `: ''}
`
