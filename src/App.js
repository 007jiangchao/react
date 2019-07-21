
import React from 'react';
import store from './store';
import {Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import AsyncComponent from './component/asyncComponent/index.js'
const Navigation = AsyncComponent(() => import("./component/navigation"));
const Right = AsyncComponent(() => import("./pages/view1"));
const Fleat = AsyncComponent(() => import("./pages/view2"));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter >
            <Navigation></Navigation>
            <Route exact path="/" component={Fleat} />
            <Route exact path="/view2" component={Right} />
          </BrowserRouter>
      </Provider>
    )
  }
}

