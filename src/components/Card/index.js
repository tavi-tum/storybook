import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

export const CardContainer = styled.a`
    height: 420px;
    max-width: 100%;
    position: relative;
    display: block;
    text-decoration: none;
    ${props => props.theme.styles[props.styles]}

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
    `
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        ::before {
            content: '';
            background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .7));
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    ` : ``
    }
    background: no-repeat center center;
    background-size: cover;

    &[style] {
    background-image: url(${props=>props.img});
    }
`

const CardLink = styled(Link)`
   ${props => props.type === 'media' ?
    `color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);
    margin-bottom: auto;` :
    props.styles === 'b-default' ? `color: #999;` : 'color: inherit;'
    }
    font-weight: 700;
    font-style: italic;
    font-family: Merriweather !important;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const CardTitle = styled.a`
    color: ${props => props.type === 'media' ? '#FFFFFF' : 'inherit'};
    font-weight: 500;
    font-size: 21px;
    margin: 20px 0;
    z-index: 1;
    text-decoration: none;

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
    z-index: -1;
    ${props => props.type === 'media' ? 'height: 100%;' : ''}
`

const CardContent = styled.div`
    color: ${props => props.type === 'media' ? '#FFFFFF' : 'inherit'};
    font-size: 15px;
    z-index: 1;
`


export default ({img, url, title, content, category, type, articleUrl, styles}) => (
    <CardContainer href={url} styles={styles}>
        <CardImage type={type} alt={title} style={{
            backgroundImage: `url(${img})`
        }}/>
        <CardInfo type={type}>
            <CardLink type={type} to={articleUrl} styles={styles}>{category}</CardLink>
            <CardTitle type={type} href={url}>{title}</CardTitle>
            <CardContent type={type}>
                {content}
            </CardContent>
        </CardInfo>
    </CardContainer>
)
