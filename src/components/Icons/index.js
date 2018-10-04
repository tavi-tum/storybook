import React from 'react'
import {defaultProps} from 'recompose'
import icons from './icons'

export default ({icon, ...props}) => {
    const Icon = (defaultProps({
        width: 30,
        height: 30,
        fill: '#333'
    })(icons[icon]))

    return <Icon {...props}/>
}