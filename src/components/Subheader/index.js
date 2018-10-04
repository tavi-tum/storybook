import React from 'react'

import Subheader from './Subheader'
import SubheaderTitle from './SubheaderTitle'
import SubheaderItems from './SubheaderItems'
import Link from '../Link'

export default ({ title, ...props }) => (
    <Subheader {...props}>
        <SubheaderTitle>
            <Link style={{color: '#fff'}} to='/'>{title}</Link>
        </SubheaderTitle>
        <div>
            {React.Children.map(props.children, (child) => <SubheaderItems> {child} </SubheaderItems>)}
        </div>
    </Subheader>
)
