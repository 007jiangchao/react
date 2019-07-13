import React from 'react';
import store from './store';
import {Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import Navigation from './component/navigation'

import Right from './component/view1';
import Fleat from './component/view2';

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

