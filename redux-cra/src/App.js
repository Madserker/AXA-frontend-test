import React, { Component } from 'react';
import './App.css';
import Home from './js/components/Home'
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route} from 'react-router-dom';

import store from'./store';
import GnomeDetails from './js/components/GnomeDetails';


class App extends Component {
  render() {
    return (
          <Provider store={store}>
          <Router>
            <div className="App">
            <Route path="/home" component={Home}/>
            <Route path="/details/:id" component={GnomeDetails}/>
          </div>
        </Router>
        </Provider>

    );
  }
}

export default App;
