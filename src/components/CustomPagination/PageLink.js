import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageLink = styled(Link)`
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    font-weight: 500;
    font-size: 14px;
    margin-right: 12px;
    text-align: center;
    line-height: 40px;
    display: block;
    color: ${props => props.active ? props.theme.colors.primaryText : props.theme.colors.primary};
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.backgroundColor};
    flex: 0 0 auto;
    text-decoration: none;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 568px) {
        display: ${props => props.next || props.prev || props.active ? 'block' : 'none'};

        &:first-child {
            display: block;
        }

        &:last-child {
            display: block;
        }
    }
`

export default ({children, ...props}) =>
    <PageLink {...props}>
        {children}
    </PageLink>
