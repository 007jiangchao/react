import React from 'react';
import store from './store';
import {Router, Route} from 'react-router'
import { Provider } from 'react-redux';
import Navigation from './component/navigation'

import Right from './component/view1';
import Fleat from './component/view2';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={null}>
            <Route exact path="/" component={Right} />
            <Route exact path="/view2" component={Fleat} />
          </Router>
      </Provider>
    )
  }
}

