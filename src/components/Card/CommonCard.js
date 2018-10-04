import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

const CardContainer = styled(Link)`
    height: 420px;
    max-width: 100%;
    position: relative;
    display: block;

    @media (max-width: 768px) {
        height: 500px;
    }

    @media (max-width: 568px) {
        height: 320px;
    }
`

const CardImage = styled.div`
    height: 50%;
    ${props => props.type === 'media' ?
    `height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;` : ``
    }
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
`

const CardLink = styled(Link)`
   ${props => props.type === 'media' ?
    `color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);
    margin-bottom: auto;` :
    `color: #999;`
    }
    font-weight: 700;
    font-style: italic;
    font-family: Merriweather !important;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const CardTitle = styled(Link)`
    color: ${props => props.type === 'media' ? `#fff` : `#16283f`};
    font-weight: 500;
    font-size: 21px;
    margin: 20px 0;

    @media (max-width: 768px) {
        font-size: 16px;
    }
   `

const CardInfo = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    box-sizing: border-box;
    ${props => props.type === 'media' ? `
     height: 100%;
    ` : ``}
    `

const CardContent = styled.div`
    color: ${props => props.type === 'media' ? `#fff` : `#16283f`};
    font-size: 15px;
    z-index: 1;
`


export default ({img, url, title, content, category, type, articleUrl}) => (
    <CardContainer to={url}>
        <CardImage img={img} type={type} alt={title}/>
        <CardInfo type={type}>
            <CardLink type={type} to={articleUrl}>{category}</CardLink>
            <CardTitle type={type} to={url}>{title}</CardTitle>
            <CardContent type={type}>
                {content}
            </CardContent>
        </CardInfo>
    </CardContainer>
)
