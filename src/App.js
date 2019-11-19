import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <Header />
      </Provider>
    )
  }
}

export default App;
