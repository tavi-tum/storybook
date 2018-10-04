import styled from 'styled-components'

export default styled.div`
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    padding: 20px 20px 0;
    line-height: 26px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
    }

    span {
        font-size: 15px;
        color: #777777;
        font-weight: normal;
        margin-left: 35px;
        vertical-align: middle;
    }

    @media (max-width: 1024px) {
        span {
            display: none;
        }
    }
`
