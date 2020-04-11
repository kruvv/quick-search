import React, { Component } from 'react';
import './App.css';
import Qsearch from './pages/qsearch/qsearch.page';
import Cars from './pages/car/car.page';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {

  render() {    
      return (
        <div>
          <nav className='nav'>
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/cars" activeClassName={'wfm-active'}>Cars</NavLink></li>
              <li><NavLink to={{
                pathname: '/about', //путь к странице
                search: '?a=1&b=2', //параметры, допустим поиска
                hash: 'wfm-hash'  //хеш допустим для скрола до определенного элемента на странице
              }} 
              activeClassName={'wfm-active'}>About</NavLink></li>
              <li><NavLink to="/qsearch" activeStyle={{color: 'yellow'}}>Quick Search</NavLink></li>
            </ul>
          </nav>
          <hr/>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          <Route path="/cars" exact render={() => <Cars />} />
          <Route path="/qsearch" component={Qsearch} />
          <Route path="/about" render={() => <h1>About</h1>} />
        </div>
        
      )
  }
}

export default App;
