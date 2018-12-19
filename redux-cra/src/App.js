import React, { Component } from 'react';
import './App.css';
import ListView from './js/components/ListView';
import Toolbar from './js/components/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
      <ListView />
      </div>
    );
  }
}

export default App;
