import React, { Component } from 'react';
import './App.css';
import Qsearch from './pages/qsearch/qsearch.page';
import Cars from './pages/car/car.page';

class App extends Component {

  render() {
      return (
          <div>
            <Cars />
            <hr/>
            <Qsearch />
          </div>
      );
  }
}

export default App;
