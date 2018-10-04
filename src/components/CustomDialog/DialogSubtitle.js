import styled from 'styled-components'

export default styled.div`
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    padding: 20px 0;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;

    a {
        outline: none;
        text-decoration: none;
        color: ${props => props.color ? props.color : props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 10px 0;
        margin: 0 10px;
        font-size: 13px;

        a {
            margin: 5px 10px 5px 0;
        }
    }
`
