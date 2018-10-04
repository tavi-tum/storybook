import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'

const ToggleButton = styled(Button)`
    padding: 9px 18px;
    margin: 0;

    @media (max-width: 700px) {
        padding: 8px;
    }

    @media (min-width: 700px) {
        > svg {
        display: none;
        }
    }

    ${props => props.type === 'secondary' ? `
    border: none;
    background: inherit!important;
    ` : ''}
    `

const ToggleContainer = styled.div`
    display: flex;

    > :first-child {
        border-radius: 3px 0 0 3px;
        border-right: 0;

    }

    > :last-child {
        border-radius: 0 3px 3px 0;

    }
`

class Toggle extends React.Component {
    constructor(props) {
        super()

        this.state = {
            active: props.active,
            labels: props.labels
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active
        })
    }

    renderButton(i, {active, ...props}) {
        const isActive = i === this.state.active

        return React.cloneElement(<ToggleButton/>, {
            active: isActive,
            color: isActive ? '#16283F' : '#999999',
            children: this.state.labels[i]['label'],
            icon: this.state.labels[i]['icon'],
            style: props.buttonStyle,
            ...props,
            onClick: () => this.props.onToggleClick(i)
        })
    }

    renderButtons() {
        const buttons = []
        const count = this.state.labels.length
        const {type, ...props} = this.props

        for (let i = 0; i < count; i++) {
            buttons.push(this.renderButton(i, {type, ...props}))
        }

        return buttons
    }

    render() {
        const buttons = this.renderButtons()

        return (
            <ToggleContainer>
                {buttons}
            </ToggleContainer>
        )
    }
}

Toggle.propTypes = {
    labels: PropTypes.array,
    active: PropTypes.number,
    onToggleClick: PropTypes.func,
    type: PropTypes.string
}

export default Toggle
