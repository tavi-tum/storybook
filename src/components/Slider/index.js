import React from 'react'
import {Range} from 'rc-slider'

import 'rc-slider/assets/index.css'
//TODO rewrite css as styled components

const handleStyle = {
    borderRadius: '10px',
    border: '2px solid #16283F',
    width: '50px',
    height: '30px',
    marginTop: '-14px',
    backgroundColor: '#16283F',
    color: '#fff',
    fontFamily: 'Rubik, sans-serif',
    fontSize: '15px',
    lineHeight: '27px',
    textAlign: 'center'
}

const railStyle = {
    backgroundColor: '#C4C4C4'
}

const trackStyle = {
    backgroundColor: '#16283F'
}

const handle = ({offset, style, className, value}) => {
    if (className === 'rc-slider-handle rc-slider-handle-2')
    return (<div className={className} style={{...style, left: `calc(${offset}% + 7px)`}}>{value}</div>)

    return (<div className={className} style={{...style, left: `calc(${offset}% - 43px)`}}>{value}</div>)

}

export default (props) => (
    <Range
        allowCross={false}
        pushable={false}
        handle={handle}
        railStyle={railStyle}
        trackStyle={[trackStyle]}
        handleStyle={[handleStyle, {...handleStyle}]}
        {...props}/>
)

