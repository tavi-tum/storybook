import styled from 'styled-components'

export default styled.div`
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    padding: 20px;
    font-size: 30px;
    font-weight: 500;
    border-bottom: 7px solid #16283F;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 20px;
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
