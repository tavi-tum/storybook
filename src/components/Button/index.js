import React from 'react'
import styled from 'styled-components'
import Icons from '../Icons'

const Tooltip = styled.div`
    position: absolute;
    width: 200px;
    background: #fff;
    font-size: 14px;
    color: #444;
    top: -170%;
    left: -140px;
    border: 1px solid #E0DED8;
    transition: opacity 200ms linear;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
    pointer-events: none;
    opacity: 0;
`

const Button = styled.button`
    padding: 6px 16px;
    position: relative;
    font-size: 15px;
    color: ${props => props.color ? props.color : props.primary ? props.theme.colors.primaryText : props.theme.colors.alternateTextColor };
    background-color: ${props => props.primary ? props.theme.colors.primary : props.active ? '#FFFFFF' : 'rgb(237, 238, 233)'};
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;

    &:hover > div {
        opacity: 1;
    }

    > :first-child {
        margin-right: 10px;
    }

    @media (max-width: 700px) {
        ${props => props.icon ? 'font-size: 0' : ''};
        padding: 6px;

        > :first-child {
            margin: 0
        }
    }
`

export default ({icon, children, active, color, widthIcon, heightIcon, tooltip, tooltipStyle, ...props}) => (
    <Button icon={icon} active={active} color={color} {...props}>
        {
            icon ? <Icons width={widthIcon ? widthIcon : '27'} height={heightIcon ? heightIcon : '27'} icon={icon}
                          fill={color ? color : '#16283F'}/> : ''
        }
        {
            tooltip ? <Tooltip style={tooltipStyle}>{tooltip}</Tooltip> : ''
        }
        {children}
    </Button>
)
