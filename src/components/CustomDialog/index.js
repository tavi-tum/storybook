import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DialogModal from './DialogModal'
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle'
import DialogSubtitle from './DialogSubtitle'
import DialogBody from './DialogBody'
import Icon from '../Icons'

export default class Dialog extends Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string,
        subtitle: PropTypes.array,
        open: PropTypes.bool,
        colorSubtitle: PropTypes.string,
        colorTitle: PropTypes.string,
        onRequestClose: PropTypes.func,
        size: PropTypes.string,
        description: PropTypes.string
    };

    componentWillReceiveProps(props) {
        if (props.open) document.body.style.overflow = 'hidden'
    }

    handleClick = () => {
        document.body.style.overflow = 'auto'
        this.props.onRequestClose()
    }

    render() {
        const {
            subtitle,
            title,
            children,
            colorSubtitle,
            colorTitle,
            open,
            size,
            description
        } = this.props;



        return (
            <React.Fragment>
                <DialogModal onClick={() => this.handleClick()} open={open}/>
                <DialogContent open={open}>
                    {title ?
                        <DialogTitle color={colorTitle}>
                            <div> {title}
                                {description ? <span> {description} </span> : ''}
                            </div>
                            <Icon style={{cursor: 'pointer'}} icon="close" width={10} height={10} fill="#999999" onClick={() => this.handleClick()}/>
                        </DialogTitle>
                    : ''}
                    {subtitle ?
                        <DialogSubtitle color={colorSubtitle}>
                            {subtitle.map((item, index) => <a href={`#${item}`} key={index}>{item}</a>)}
                        </DialogSubtitle>
                    : ''}
                    <DialogBody size={size}>
                        {children}
                    </DialogBody>
                </DialogContent>
            </React.Fragment>
        );
    }
}
