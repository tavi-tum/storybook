import styled from 'styled-components'

export default styled.div`
    font-size: 21px;
    color: ${props => props.theme.colors.primaryText};
    display: inline-block;

    &:not(:last-child) {
        padding-right: 25px;
    }

    @media (max-width: 768px) {
        font-size: 16px;

        &:not(:last-child) {
            padding-right: 20px;
        }
    }
`
