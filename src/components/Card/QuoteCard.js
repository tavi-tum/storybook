import React from 'react'
import styled from 'styled-components'
import Link from '../Link'

import {CardContainer} from './index'

const QuoteWrapper = styled.div`
    display: flex;
    padding: 25px 20px;
    text-align: center;
    flex-flow: column nowrap;`

const Quote = styled.div`
    font-size: 15px;
    line-height: 22px;
    text-align: center`

const QuoteImage = styled.div`
    width: 60px;
    height: 60px;
    margin: 15px auto;
    border-radius: 50%;
    background: no-repeat center center;
    `

const QuoteLink = styled(Link)`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 15px;
    `

export default ({img, url, title, content, category, type, articleUrl}) => (
    <CardContainer to={url}>
        <QuoteWrapper>
            <Quote>{content}</Quote>
            <QuoteImage style={{backgroundImage: `url(${img})`}}/>
            <QuoteLink to={url}>{title}</QuoteLink>
            <span style={{fontSize: '14px'}}>{category}</span>
        </QuoteWrapper>
    </CardContainer>
)
