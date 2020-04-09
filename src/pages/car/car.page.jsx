import React, { Component } from 'react';
import Car from '../../components/Car/Car';
import '../../App.copy.scss';


class Cars extends Component {

  state = {
    cars:[
      {name: 'Ford', year: 2010},
      {name: 'Audi', year: 2019},
      {name: 'BMW', year: 2016},
    ],
    pageTitle: 'React Components',
    showCars: false 
  }


  //This method edit title
  handleChangeTitle = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  //This method recieved data from fild input
  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    })
  }

  //This method hide or show cars
  handleToggleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  //This method editind name car
  handleChangeName(name, index) {
    const car = this.state.cars[index] //Получаем из стейта машину по ее индексу
    car.name = name                    //меняем старое имя на новое 
    const cars = [...this.state.cars]  //Создаем новый массив с помощью спред оператора
    cars[index] = car                  //Присваиваем по индексу новое значение машине
    this.setState({                    //Меняем стейт
      cars
    })
  }

  //This method deleting car
  handleDelete(index) {
    const cars = this.state.cars.concat() //copy array whith sintacsis ES5
    cars.splice(index, 1)
    this.setState({cars})
  }
  

  render() {
      const divStyle = {
        textAlign: 'center'
      }

      //Logic for hide or show cars
      let cars = null
      if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
              return (
                <Car 
                  key={index}
                  name={car.name}
                  year={car.year}
                  /* onChangeTitle={this.handleChangeTitle.bind(this, car.name)} */
                  onChangeName={event => this.handleChangeName(event.target.value, index)}
                  onDelete={this.handleDelete.bind(this, index)}
                  />
              )
          }
        ) 
      }
  

      return (
          <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          <input type="text" onChange={this.handleInput}/>
        
          {/* <button onClick={this.handleChangeTitle.bind(this, 'Changed!')}>Change Title</button> */}
          
        <button 
          className={"AppButton"}
          onClick={this.handleToggleCars}
          >Tooggle cars</button>

        {/* Logic for hide or show cars in jsx sintacsis */}
          {/* { this.state.showCars
            ? this.state.cars.map((car, index) => {
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
            : null
          } */}

          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            { cars }
          </div>
          
          </div>
      );
  }
}

export default Cars;