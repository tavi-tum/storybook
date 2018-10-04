import styled from 'styled-components'

export default styled.div`
    border: 1px solid #E0DED8;
    padding: 20px;
    border-radius: 5px;
    background-color: ${props => props.open ? '#F1ECE4' : '#FFFFFF'};
    transition: background-color 400ms ease-out;
    margin-bottom: 15px;
    width: inherit;
    max-width: inherit;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${props => props.edit || props.editName ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : ''};
`
