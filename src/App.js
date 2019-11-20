import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Detail = lazy(() => import('./pages/detail'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconStyle />
          <Header />
          <BrowserRouter>
            <Suspense fallback={<div>loading...</div>}>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/detail' component={Detail}></Route>
            </Suspense>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
