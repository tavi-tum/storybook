import styled from 'styled-components'

export default styled.div`
    padding-bottom: 20px;
    font-size: ${props => props.font ? props.font : '15'}px;
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    width: calc(50% - 45px);
    display: inline-block;

    &:nth-child(2n) {
        margin-right: 90px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 15px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }
`
