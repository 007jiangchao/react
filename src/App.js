
import React from 'react';
import store from './store';
import {Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import AsyncComponent from './component/asyncComponent/index.js'
const Navigation = AsyncComponent(() => import("./component/navigation"));

// 嵌套路由 一次pei
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter >
            <Route  path="/" component={Navigation} />
           
          </BrowserRouter>
      </Provider>
    )
  }
}

