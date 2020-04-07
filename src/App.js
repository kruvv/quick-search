import React, { Component } from 'react';
import './App.css';
import Car from './components/Car/Car';
import Qsearch from './pages/qsearch/qsearch.page';

class App extends Component {

  state = {
    cars:[
      {name: 'Ford', year: 2010},
      {name: 'Audi', year: 2019},
      {name: 'BMW', year: 2016},
    ],
    pageTitle: 'React Components'
  }


  handleChangeTitle = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    })
  }

  render() {
      const divStyle = {
        textAlign: 'center'
      }

      

      return (
          <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          <input type="text" onChange={this.handleInput}/>
          <button onClick={this.handleChangeTitle.bind(this, 'Changed!')}>Change Title</button>

          { this.state.cars.map((car, index) => {
                  return (
                    <Car 
                      key={index}
                      name={car.name}
                      year={car.year}
                      onChangeTitle={this.handleChangeTitle.bind(this, car.name)}
                      />
                  )
              }
            ) 
          }
          
            <Qsearch />
          </div>
      );
  }
}

export default App;
