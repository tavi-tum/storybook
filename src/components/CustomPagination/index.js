import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import PageLink from './PageLink'
import Container from './PaginationContainer'

class Pagination extends React.Component {
    constructor(props) {
        super()
        this.state = {
            active: props.active,
            count: props.count
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active,
            count: props.count
        })
    }

    renderLink(i, label = null, next = null, prev = null) {
        return React.cloneElement(<PageLink />, {
            active: i === this.state.active,
            to: `${this.props.baseURL}/${i}`,
            next: i === next,
            prev: i === prev,
            replace: true
        }, label ? label : i)
    }

    renderLinks() {
        const links = []
        const {count, items} = this.props
        const {active} = this.state
        const next = items[this.props.items.indexOf(active) + 1]
        const prev = items[this.props.items.indexOf(active) - 1]

        if (count < 10) {
            for (let i = 0; i < count; i++) {
                links.push(this.renderLink(items[i], null, next, prev))
            }
        } else {
            const offset = count - this.props.items.indexOf(active);


            if (offset > 8) {
                const start  = active === 1 ? 0 : this.props.items.indexOf(active) - 1
                for (let i = start; i <= start + 3; i++) {
                    links.push(this.renderLink(items[i], null, next, prev))
                }
                links.push(this.renderLink(items[this.props.items.indexOf(active) + 5], '...'))
                for (let i = count - 2; i < count; i++) {
                    links.push(this.renderLink(items[i], null, next, prev))
                }
            } else {
                const start = count - 8
                for (let i = start; i <= count - 1; i++) {
                    links.push(this.renderLink(items[i], null, next, prev))
              }
            }
        }

        return links
    }

    render() {
        const links = this.renderLinks()
        return (
            <Container>
                <PageLink rel='nofollow' onClick={this.props.onPrevPageClick} to={'/'}>{'<<'}</PageLink>
                    {links}
                <PageLink onClick={this.props.onNextPageClick} rel='nofollow' to={'/'}>{'>>'}</PageLink>
            </Container>
        )
    }
}

Pagination.propTypes = {
    count: PropTypes.number,
    active: PropTypes.number,
    onPrevPageClick: PropTypes.func,
    onNextPageClick: PropTypes.func,
    baseURL: PropTypes.string,
    items: PropTypes.array
}

export default Pagination
