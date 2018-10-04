import React from 'react'
import PropTypes from 'prop-types'

import PageLink from './PageLink'
import Container from './PaginationContainer'

class Pagination extends React.Component {
    constructor(props) {
        super()
        this.state = {
            active: props.active,
            count: props.count,
        }
    }

    componentWillReceiveProps(props, context) {
        this.setState({
            active: props.active,
            count: props.count
        })
    }

    renderLink(i, label = null, next = null, prev = null){
        return React.cloneElement(<PageLink/>, {
            active: i === this.state.active,
            onClick: this.onPageClick,
            link: i,
            next: i === next,
            prev: i === prev
        }, label ? label: i)
    }

    renderLinks() {
        const links = []
        const {count} = this.props
        const {active} = this.state
        const next = active + 1
        const prev = active - 1

        if (count < 10) {
            for (let i = 1; i <= count; i++) {
                links.push(this.renderLink(i, null, next, prev))
            }
        } else {
            const offset = count - active;

            if (offset > 8) {
                const start  = active === 1 ? 1 : active - 1
                for (let i = start; i <= start + 3; i ++) {
                    links.push(this.renderLink(i, null, next, prev))
                }
                links.push(this.renderLink(start + 4, '...'))
                for (let i = count - 2; i <= count; i++) {
                    links.push(this.renderLink(i, null, next, prev))
                }
            } else {
                const start = count - 8
                for (let i = start; i <= count; i++) {
                  links.push(this.renderLink(i, null, next, prev))
              }
            }
        }

        return links
    }

    onPageClick = (active) => {
        this.setState({active: active})
        this.props.onPageClick(active)
    }

    onPrevPageClick = () => {
        if (this.state.active > 1) {
            this.setState({active: this.state.active})
            this.props.onPageClick(this.state.active - 1)
        }
    }

    onNextPageClick = () => {
        if (this.state.active < this.state.count) {
            this.setState({active: this.state.active})
            this.props.onPageClick(this.state.active + 1)
        }
    }

    render() {
        const links = this.renderLinks()
        return (
            <Container>
                <PageLink onClick={this.onPrevPageClick}>{'<<'}</PageLink>
                    {links}
                <PageLink onClick={this.onNextPageClick}>{'>>'}</PageLink>
            </Container>
        )
    }
}

Pagination.propTypes = {
    count: PropTypes.number,
    active: PropTypes.number,
    baseURL: PropTypes.string,
    onPageClick: PropTypes.func
}

export default Pagination
