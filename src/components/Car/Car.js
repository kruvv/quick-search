import React, { Fragment, Component } from 'react';
import './Car.css';
//import Radium from 'radium';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef() //Create local reference
    }
    
    /* Устанавливает фокус в поле инпут в зависимости от индекса элемента */
    componentDidMount() {
        if(this.props.index === 0) {
            //this.inputRef.focus()
            this.inputRef.current.focus()  //for local reference
        }
    }
    
    render() {
        // console.log(this.props);
        
        const inputClasses = ['input']

    if(this.props.name !== '') {
        inputClasses.push('green')
    }else {
        inputClasses.push('red')
    }
    if(this.props.name.length > 4) {
        inputClasses.push('bold')
    }

    return (
    <Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input 
            //ref={(inputRef) => this.inputRef = inputRef} //для работы фокуса на инпуте
            ref={this.inputRef} //если  в это ручное создание референса в конструкторе
            type="text" 
            onChange={this.props.onChangeName} 
            value={this.props.name}
            className={inputClasses.join(' ')}
        />
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
        <button onClick={this.props.onDelete}>Delete</button>
    </Fragment>
    )
    }    
}

 Car.propTypes = {
     name: PropTypes.string.isRequired,
     year: PropTypes.number,
     index: PropTypes.number,
     onChangeName: PropTypes.func,
     onDelete: PropTypes.func,
 }

 Car.defaultProps = {
     name: 'Auto'
 }
   
//export default Radium(Car)  //Радиум не дает валидировать PropTypes
export default withClass(Car, 'Car')
 