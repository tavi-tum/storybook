import styled from 'styled-components'

export default styled.div`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryText};

    @media (max-width: 768px) {
        font-size: 23px;
    }
`
