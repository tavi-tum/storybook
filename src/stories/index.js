import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components'

import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Input from '../components/Input'
import Button from '../components/Button'
import IconButton from '../components/Button/IconButton'
import Icon from '../components/Icons'
import Grid from '../components/Grid'
import Dialog from '../components/Dialog'
import CustomDialog from '../components/CustomDialog'
import Chip from '../components/Chip'
import Subheader from '../components/Subheader'
import List from '../components/List'
import Toolbar from '../components/Toolbar'
import Link from '../components/Link'
import Pagination from '../components/Pagination'
import Slider from '../components/Slider'
import CustomPagination from '../components/CustomPagination'
import Toggle from '../components/Toggle'
import Card from '../components/Card'
import QuoteCard from '../components/Card/QuoteCard'
import Accordion from '../components/Accordion'

import theme from '../theme'

const FontWrapper = styled.div`
* {
    font-family: Rubik, sans-serif;
    }`

const ThemeDecorator = (storyFn) => (
    <Router>
        <ThemeProvider theme={theme}>
            <FontWrapper>
                {storyFn()}
            </FontWrapper>
        </ThemeProvider>
    </Router>
)

addDecorator(ThemeDecorator)

storiesOf('Input', module)
    .add('Default', () =>
        <div style={{width: '400px'}}>
            <Input placeholder="Default Input" icon='search' onIconClick={() => console.log('test')}/>
        </div>)
    .add('Fullwidth', () => <Input fullwidth placeholder="Fullwidth Input"/>)

storiesOf('Button', module)
    .add('Default', () => <Button>Default Button</Button>)
    .add('Primary', () => <Button primary>Primary Button</Button>)
    .add('ButtonWithIcon', () => <Button icon='scan'>Default Button</Button>)
    .add('IconButton', () => <IconButton icon='search'/>)
    .add('Button with tooltip', () => <div style={{marginTop: '500px'}}><Button icon='edit' tooltip='Режим редактирования'></Button></div>)

storiesOf('Icons', module)
    .add('Default', () => <Icon icon="search"/>)
    .add('Custom size', () => <Icon icon="search" width={40} height={40}/>)
    .add('Custom color', () => <Icon icon="search" fill="red"/>)
    .add('Search', () => <Icon icon="search"/>)
    .add('Login', () => <Icon icon="login"/>)
    .add('Glass', () => <Icon icon="glass" width={40} height={40}/>)
    .add('Menu', () => <Icon icon="menu"/>)
    .add('Settings', () => <Icon icon="settings"/>)
    .add('FilterList', () => <Icon icon="filterList"/>)
    .add('FilterOne', () => <Icon icon="filterOne"/>)
    .add('FilterLarge', () => <Icon icon="filterLarge"/>)
    .add('Close', () => <Icon icon="close"/>)
    .add('FilterSmall', () => <Icon icon="filterSmall"/>)
    .add('ArrowUp', () => <Icon icon="arrowUp"/> )
    .add('ArrowDown', () => <Icon icon="arrowDown"/>)
    .add('Scan', () => <Icon icon="scan"/>)
    .add('Mark', () => <Icon icon="mark"/>)
    .add('ArrowLeft', () => <Icon icon="arrowLeft"/>)
    .add('ArrowRight', () => <Icon icon="arrowRight"/>)
    .add('More', () => <Icon icon="more"/>)
    .add('Less', () => <Icon icon="less"/>)
    .add('Person', () => <Icon icon="person"/>)
    .add('Letter', () => <Icon icon="letter"/>)
    .add('Facebook', () => <Icon icon="facebook"/>)
    .add('Insta', () => <Icon icon="insta"/>)
    .add('Twitter', () => <Icon icon="twitter"/>)
    .add('VK', () => <Icon icon="vk"/>)
    .add('Youtube', () => <Icon icon="youtube"/>)
    .add('Logo', () => <Icon icon='logo' width={80} height={80}/>)
    .add('Downdload', () => <Icon icon='download'/>)
    .add('FacebookSmall', () => <Icon icon='facebookSmall'/>)
    .add('TwitterSmall', () => <Icon icon='twitterSmall'/>)
    .add('VKSmall', () => <Icon icon="vkSmall"/>)
    .add('OKSmall', () => <Icon icon="okSmall"/>)
    .add('Picture', () => <Icon icon="picture"/>)
    .add('Text', () => <Icon icon="text"/>)
    .add('Loading', () => <Icon icon="loading"/>)
    .add('Edit', () => <Icon icon="edit"/>)
    .add('Minus', () => <Icon icon="minus"/>)
    .add('Plus', () => <Icon icon="plus"/>)
    .add('Share', () => <Icon icon="share"/>)

storiesOf('Grid', module)
    .add('Grid', () =>
        <Grid perRow={4}>
            <div> GridItem GridItem</div>
            <div> GridItem GridItem</div>
            <div> GridItem GridItem</div>
            <div> GridItem GridItem</div>
        </Grid>
    )

storiesOf('Dialog', module)
    .add('Dialog', () => <Dialog open={true} title="Title"> </Dialog>)
    .add('Dialog with child', () => <Dialog open={true} title="Title" subtitle={["L", "M"]}>
        <List border title="L">
            <span> List item </span>
            <span> List item </span>
        </List>
    </Dialog>)

storiesOf('Chip', module)
    .add('Chip', () => <Chip id={0} label={"language"} onRequestDelete={(e) => console.log(e)}/>)

storiesOf('Subheader', module)
    .add('Subheader', () =>
        <Subheader title="Title">
            <div>First</div>
            <div>Second</div>
        </Subheader>
    )

storiesOf('List', module)
    .add('List', () =>
        <List border colorItems="red" title="L">
            <span> List item </span>
            <span> List item </span>
        </List>
    )

storiesOf('Toolbar', module)
    .add('Toolbar', () =>
        <Toolbar lastChild>
            <Icon icon="search"/>
            <Icon icon="menu"/>
        </Toolbar>)

storiesOf('Link', module)
    .add('Link', () => <Link to="https://www.styled-components.com" target="_blank"> Link </Link>)

storiesOf('Pagination', module)
    .add('Pagination', () => <Pagination baseURL='/search' count={15} onPageClick={(e) => console.log(e)} active={5}/>)

storiesOf('Slider', module)
    .add('Slider', () => <div style={{maxWidth: '1280px'}}><Slider min={1700} max={1963} defaultValue={[1700, 1963]}/></div>)

storiesOf('CustomPagination', module)
    .add('CustomPagination', () => <CustomPagination count={12} active={1} items={[1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}/>)

storiesOf('Toggle', module)
    .add('Toggle', () => <Toggle labels={[{label:"First"}, {label: "Second"}]} active={1} />)
    .add('SecondaryToggle', () => <Toggle labels={[{label:"First"}, {label: "Second"}]} active={1} type='secondary' />)


storiesOf('Card', module)
    .add('Card', () => <div style={{width: '589px'}}>
        <Card
            url='http://nekrasovka.ru'
            articleUrl='http://nekrasovka.ru/admin'
            type='1'
            category='Находка'
            title='Журнал «CCCР на стройке» № 7'
            content='Номер вышел к 10-летию смерти поэта Владимира Маяковского, оформил журнал Александр Родченко'
            img='http://nekrasovka.ru/img/1069/medium'/>
    </div>)
    .add('QuoteCard', () => <div style={{width: '275px'}}>
        <QuoteCard
            url='http://nekrasovka.ru'
            articleUrl='http://nekrasovka.ru/admin'
            type='1'
            category='Поэт'
            title='Иван Павлов'
            content='Литература не должна наклоняться в уровень с обществом в его темных или сомнительных явлениях. Во что бы то ни стало, при каких бы обстоятельствах ни было, она не должна ни на шаг отступать от своей цели — возвысить общество до своего идеала — идеала добра, света и истины.'
            img='http://nekrasovka.ru/img/1069/medium'
        />
    </div> )

storiesOf('Accordion', module)
    .add('Accordion', () =>
    <div style={{width: '568px', maxWidth: '568px', margin: 'auto'}}>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={true} disabled={true} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
        <Accordion open={false} title='Анна Иоановна (1693-1740)' description='Прапорщик Черниговского полка, адьютант 2-го батальона, командиром которого был Сергей Муравьев-Апостол, декабрист'>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
            <div>Русская Старина, 1870 год, Том 2, № 7-12, Страницы 128, 130, 495.</div>
        </Accordion>
    </div>
    )

storiesOf('CustomDialog', module)
    .add('Dialog with child', () => <Dialog open={true} title="Title">
        <List>
            <span> List item </span>
            <span> List item </span>
        </List>
    </Dialog>)
