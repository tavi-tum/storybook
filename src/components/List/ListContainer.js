import styled from 'styled-components'

export default styled.div`
    &:not(:last-child) {
        border-bottom: ${props => props.border ? '1px solid #C4C4C4' : 'none'};
    }
`
