import React, { Component } from 'react';
import Input from '../../components/input/input.component'
import Output from '../../components/output/output.component'

//This component is a quick search form highlighting matching characters.
class Qsearch extends Component {

    state = {
        documents: [
            {id: 1, data: 'Some text1', date: '2012-09-01'},
            {id: 2, data: 'Some text2', date: '2014-02-01'},
            {id: 3, data: 'Some text3', date: '2017-07-21'},
            {id: 4, data: 'Some text4', date: '2013-12-03'},
            {id: 5, data: 'Some text5', date: '2018-05-11'},
        ]
    }

    handleInput = (event) => {
        const eventData = event.target.value
        if(eventData.length >= 3) {
            //Здесь делаем запрос к БД
            console.log('Запрос к БД.....');
            
        }else {
            //Выдаем сообщение пользователю о недостаточности символов
            console.log('До запроса', (2 - eventData.length), ' символ');

        }
        
    }
    

    render() {
        return (
            <div>
                <Input onChangeInput={this.handleInput.bind(this)} />
                <p>Result Search:</p>
                {this.state.documents.map((docum, index) => {
                            return (
                                <Output 
                                    key={index}
                                    id={docum.id}
                                    data={docum.data}
                                    date={docum.date}                                    
                                />
                            )
                        }
                    )
                }
            
            </div>
            
        );
            
        
        

    }

}

export default Qsearch
 