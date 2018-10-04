import React from 'react'

import ListContainer from './ListContainer'
import ListItems from './ListItems'
import ListTitle from './ListTitle'

export default ({ children, border, title, fontItems, colorItems, colorTitle, fontTitle }) => (
    <React.Fragment>
        {!!children.length ?
            <ListContainer border>
                {title ? <ListTitle id={title} color={colorTitle} font={fontTitle}> {title} </ListTitle> : <span />}
                {!!children.map ?
                    children.map((child, index) => <ListItems font={fontItems} color={colorItems} key={index}> {child} </ListItems>)
                    : <ListItems font={fontItems} color={colorItems}> {children} </ListItems>
                }
            </ListContainer>
        : ''}
    </React.Fragment>
)
