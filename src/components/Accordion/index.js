import React, {Component} from 'react'
import PropTypes from 'prop-types';
import AccordionContainer from './AccordionContainer'
import AccordionContent from './AccordionContent'
import Button from '../Button'
import Link from '../Link'
import Icon from '../Icons'
import styled from 'styled-components'
import Observer from 'react-intersection-observer'
import 'intersection-observer'

const Title = styled.div`
    line-height: 22px;
    font-size: 16px;
    color: #000000;
    flex-grow: 1;

    em {
      background: yellow;
      font-style: normal;
    }

    ${props => props.edit || props.editName ? `
        :hover {
            color: #EB5757;
            cursor: pointer;

            svg {
                display: inline-block;
                padding: 0 10px;
            }
        }
    ` : ``}

    svg {
        display: none;
    }
`

const Description = styled.div`
    line-height: 21px;
    flex: 1;
    font-size: 14px;
    color: #444444;
    padding-bottom: 10px;

    em {
      background: yellow;
      font-style: normal;
    }

    ${props => props.edit || props.editName ? `
        :hover {
            color: #EB5757;
            cursor: pointer;

            svg {
                display: inline-block;
                padding: 0 10px;
            }
        }
    ` : ``}

    svg {
        display: none;
    }
`

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 10px;

    > button, a {
        visibility: ${props => props.open ? 'hidden' : 'visible'};
    }

    > :not(:last-child) {
        margin-right: 10px;
    }
`

const RaisedButton = styled(Button)`
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    background-color: ${props => props.edit ? '#EB5757' : '#FFFFFF'};
    transition: background-color 200ms ease-in;
    font-size: 15px;
    padding: 7px;

    > :first-child {
        margin-right: 0;
    }
`

const ButtonContainer = styled.div`
    display: ${props => props.isInView ? 'flex' : 'none'};
    justify-content: flex-end;

    ${props => props.top ? `
        position: absolute;
        top: 20px;
        right: 20px;
    ` : props.bottom ? `
        position: absolute;
        bottom: 20px;
        right: 20px;
    ` : `
        position: fixed;
        bottom: 20px;
        width: calc(100% - 40px);
        max-width: inherit;
        transform: translate(-42px);
    `};

    > :not(:last-child) {
        margin-right: 10px;
    }
`

export default class Dialog extends Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string,
        open: PropTypes.bool,
        description: PropTypes.string,
        onHandleClick: PropTypes.func,
        onEditClick: PropTypes.func,
        disabled: PropTypes.bool,
        onTitleClick: PropTypes.func,
        onDescriptionClick: PropTypes.func
    };

    constructor(props) {
        super()
        this.state = {
            top: true,
            bottom: false,
            edit: false
        }
    }

    componentWillReceiveProps(props) {
        if (!props.open && props.disabled) this.setState({edit: false})
    }

    handleClick = () => {
        if ((this.props.open && this.state.edit) || !this.props.disabled) this.props.onTitleClick()
    }

    descriptionClick = () => {
        if ((this.props.open && this.state.edit) || !this.props.disabled) this.props.onDescriptionClick()
    }

    editClick = () => {
        this.setState({edit: !this.state.edit})
        this.props.onEditClick()
    }

    buttonClick = () => {
        this.setState({edit: false})
        !this.state.top && this.div.scrollIntoView()
        this.props.onHandleClick()
    }

    render() {
        const {
            title,
            children,
            open,
            description,
            onHandleClick,
            onEditClick,
            disabled,
            onTitleClick,
            onDescriptionClick,
            person,
            editName
        } = this.props;

        return (
            <Observer style={{maxWidth: 'inherit'}}>
                {
                    inView => <React.Fragment><AccordionContainer innerRef={target => {
                        this.div = target
                    }} open={open} edit={this.state.edit} editName={editName}>
                        <Observer threshold={1} onChange={(inView) => this.setState({top: inView})}/>
                        <TitleContainer open={open}>
                            <Title edit={this.state.edit} editName={editName}
                                   onClick={() => this.handleClick()}
                            >
                                <span dangerouslySetInnerHTML={{__html: title}}></span>
                                <Icon icon="pencil" fill="#EB5757" height={12} width={12}/>
                            </Title>
                            {person &&
                                <Link to={person}><RaisedButton heightIcon={15} widthIcon={15} icon="share" /></Link>
                            }
                            {!disabled && <RaisedButton heightIcon={15} edit={editName} widthIcon={15} icon="edit"
                                          tooltip="Режим редактирования" onClick={() => this.props.onEditClick()}/>}
                            {disabled &&
                            <RaisedButton heightIcon={15} widthIcon={15} icon="plus" onClick={() => this.buttonClick()}/>}
                        </TitleContainer>
                        {description &&
                        <Description edit={this.state.edit} editName={editName}
                                     onClick={() => this.descriptionClick()}
                        >
                            <span dangerouslySetInnerHTML={{__html: description}}></span>
                            <Icon icon="pencil" fill="#EB5757" height={12} width={12}/>
                        </Description>
                        }
                        <AccordionContent open={open}>
                            <div>
                                {children}
                            </div>
                        </AccordionContent>
                        {open &&
                        <ButtonContainer top={this.state.top} bottom={this.state.bottom} isInView={inView} >
                            {person &&
                                <Link to={person}><RaisedButton heightIcon={15} widthIcon={15} icon="share" /></Link>
                            }
                            <RaisedButton heightIcon={15} edit={this.state.edit} widthIcon={15} icon="edit"
                                          tooltip="Режим редактирования" onClick={() => this.editClick()}/>
                            {person &&
                                <RaisedButton heightIcon={15} widthIcon={15} icon="minus" onClick={() => this.buttonClick()}/>
                            }
                        </ButtonContainer>
                        }
                    </AccordionContainer>
                    <Observer threshold={1} onChange={(inView) => this.setState({bottom: inView})}/>
                    </React.Fragment>
                }
            </Observer>
        )
    }
}
