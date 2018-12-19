import React, { Component } from 'react';
import './App.css';
import ListView from './js/components/ListView';
import Toolbar from './js/components/Toolbar'
import {Provider} from 'react-redux';

import store from'./store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Toolbar />
      <ListView />
      </div>
      </Provider>
    );
  }
}

export default App;
