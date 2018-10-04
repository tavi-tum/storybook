import React from 'react'
import styled from 'styled-components'
import Icons from '../Icons'

const IconButton = styled.button`
    padding: 0;
    background-color: inherit;
    cursor: pointer;
    outline: none;
    border: none;
`

export default ({icon, onIconClick, width, height, ...props}) => (
    <IconButton onClick={onIconClick} {...props}>
        <Icons width={width} height={height} icon={icon} {...props} />
    </IconButton>
)
