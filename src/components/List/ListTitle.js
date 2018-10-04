import styled from 'styled-components'

export default styled.div`
    font-size: ${props => props.font ? props.font : '18'}px;
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    padding: 30px 0;
    font-weight: 600;
`
