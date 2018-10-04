import React, { Component } from 'react';

import {ThemeProvider} from 'styled-components';
import theme from './theme'
import Input from './components/Input'
import Button from './components/Button'
import Icon from './components/Icons'

import './App.css';

class App extends Component {
  render() {
    return (
<ThemeProvider theme={theme}>
      <div className="App">
        <Input fullwidth onInput={() => console.log('i am inputed')} placeholder="test build"/>
        <Button>+ фильтр</Button>
          <Icon width={50} height={50} icon="search"/>
      </div>
</ThemeProvider>
    );
  }
}

export default App;
