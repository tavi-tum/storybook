import styled from 'styled-components'

export default styled.div`
    margin-right: ${props => props.margin}px;
    flex: 0 0 calc(${props => 100/props.perRow}% - ${props => (props.margin)*(props.perRow-1)/(props.perRow)}px);
    width: calc(${props => 100/props.perRow}% - ${props => (props.margin)*(props.perRow-1)/(props.perRow)}px);
    margin-bottom: 30px;
    overflow: hidden;

    &:nth-child(${props => props.perRow}n) {
        margin-right: 0;
    }

    @media (max-width: ${props => props.breakpoints.medium}) {
        flex: 0 0 calc(33.3% - 33.3px);
        width: calc(33.3% - 33.3px);
        margin-right: 50px;
        margin-bottom: 30px;

        &:nth-child(${props => props.perRow}n) {
            margin-right: 50px;
        }

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (max-width: ${props => props.breakpoints.small}) {
        flex: 0 0 calc(50% - 15px);
        width: calc(50% - 15px);
        margin-right: 30px;
        margin-bottom: 30px;

        &:nth-child(${props => props.perRow}n) {
            margin-right: 30px;
        }

        &:nth-child(3n) {
            margin-right: 30px;
        }

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media (max-width: ${props => props.breakpoints.mobile}) {
        flex: 0 0 100%;
        width: 100%;
        margin-right: 0;
        margin-bottom: 30px;
        max-width: 100%;

        &:nth-child(${props => props.perRow}n) {
            margin-right: 0;
        }

        &:nth-child(3n) {
            margin-right: 0;
        }

    }
    
    ${props => props.lastChildFullWidth && `
    @media(max-width: 1024px) {
        :last-child {
            flex: 1 0 100%!important;
            margin-bottom: 0;
            }
        }
    `}
`
