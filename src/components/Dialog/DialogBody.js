import styled from 'styled-components'

export default styled.div`
    padding: 20px;
    max-height: 50vh;
    overflow-y: auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 10px;
        max-height: ${props => props.size ? props.size : '50vh'};
    }
`
