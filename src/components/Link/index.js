import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const DisabledLink = styled.span`
        color: #999;
`

export default ({children, disabled, ...props}) => (
    !disabled ?
        <Link {...props}>
            {children}
        </Link> :
        <DisabledLink {...props}>
            {children}
        </DisabledLink>

)
