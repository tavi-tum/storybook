import React from 'react'

import Chip from './Chip'
import ChipLabel from './ChipLabel'
import Icon from '../Icons'

export default ({ id, label, onRequestDelete }) => (
    <Chip id={id}>
        <ChipLabel> {label} </ChipLabel>
        <Icon icon="close" width={15} height={15} fill="#16283F" onClick={onRequestDelete} />
    </Chip>
)
