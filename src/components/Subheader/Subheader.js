import styled from 'styled-components'

export default styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${props => props.theme.colors.primary};
    height: ${props => props.height ? props => props.height : "90"}px;
    padding: 0 30px;
`
