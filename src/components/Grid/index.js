import React from 'react'
import {defaultProps} from 'recompose'

import Grid from './Grid'
import GridItem from './GridItem'

export default defaultProps({
    breakpoints: {
        medium: '1024px',
        small: '768px',
        mobile: '500px'
    },
    margin: '50'
})(({children, perRow, breakpoints, margin, ...props}) => (
    <Grid {...props}>
        {!!children && !!children.map ?
            children.map((child, index) =>
                <GridItem lastChildFullWidth={props.lastChildFullWidth === (index + 1)} breakpoints={breakpoints} key={index} margin={margin} perRow={perRow}>
                    {child}
                </GridItem>
            ) : <GridItem perRow={perRow}>{children}</GridItem>
        }
    </Grid>
))
