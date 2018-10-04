import React from 'react'

import ToolbarContainer from './ToolbarContainer'

export default ({ ...props, children, firstChild, lastChild }) => (
    <ToolbarContainer firstChild={firstChild} lastChild={lastChild} {...props} >
        {!!children && !!children.map ?
            children.map((child, index) => <div key={index}> {child} </div> )
            : <div> {children} </div>
        }
    </ToolbarContainer>
)
