import React from 'react'
import styled from 'styled-components'
import IconButton from '../Button/IconButton'
import Button from '../Button'

const Input = styled.input`
     font-size: ${props => props.font ? props.font : '21'}px;
     font-weight: ${props => props.bold ? 'bold' : 'normal'};
     color: ${props => props.color ? props.color : '#999999'};
     border: none;
     flex: 1 1 auto;
     outline: none;
     width: 100%;

     ::placeholder {
        color: ${props => props.colorPlaceholder ? props.colorPlaceholder : '#999999'};
     }

     @media (max-width: 1024px) {
         font-size: 15px;
         padding-right: 10px;
     }

     @media (max-width: 568px) {
         ::placeholder {
            color: #FFF;
         }
     }
 `

const InputContainer = styled.div`
    background: #fff;
    border: 1px solid ${props => props.theme.colors.borderColor};
    display: flex;
    align-items: center;
    padding: 10px 18px;
    box-sizing: border-box;
    width: ${props => props.fullwidth ? '100%' : 'auto'};
`

const InputButton = styled.button`
    background: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 0;
    color: ${props => props.theme.colors.primaryText};
    font-size: 18px;
    margin: -10px -18px;
    padding: 16px 25px;
    outline: none;
    cursor: pointer;

    @media (max-width: 1024px) {
        font-size: ${props => props.icon ? '0' : '16px'};
        padding: ${props => props.icon ? '0' : ''};
        margin: ${props => props.icon ? '0' : ''};
    }

    @media not all and (max-width: 1024px) {
        + button {
            display: none;
        }
    }
`

const Caption = styled.div`
    color: #888888;
    font-size: 15px;

    span:first-child {
        display: none;
    }

    span:last-child {
        display: inline-block;
        padding-bottom: 30px;
    }

    @media (max-width: 568px) {
        span:last-child {
            display: none;
        }

        span:first-child {
            display: inline-block;
            padding-bottom: 20px;
        }

    }
`

export default ({icon, onIconClick, onClick, proxyRef, placeholder, color, font, bold, fill, widthIcon, heightIcon, colorPlaceholder, value, button, caption, ...props}) => (
    <React.Fragment>
        {
            caption ?
                <Caption>
                    <span> {caption.mobile} </span>
                    <span> {caption.desktop} </span>
                </Caption> : ''
        }
        <InputContainer {...props}>
            <Input innerRef={proxyRef} placeholder={placeholder} value={value} color={color} font={font} bold={bold} colorPlaceholder={colorPlaceholder}/>
            {
                button ? <InputButton icon={icon} onClick={onClick}>{button}</InputButton> : ''
            }
            {
                icon ? <IconButton icon={icon} onIconClick={onIconClick} fill={fill} width={widthIcon} height={heightIcon} /> : ''
            }
        </InputContainer>
    </React.Fragment>
)
