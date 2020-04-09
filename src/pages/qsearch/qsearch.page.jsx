import React, { Component } from 'react';
import '../../App.css'
import Input from '../../components/input/input.component'
import Output from '../../components/output/output.component'
import CheckBox from '../../components/checkbox/checkbox.component'

//This component is a quick search form highlighting matching characters.
class Qsearch extends Component {

    state = {
        documents: [
            {id: 1, data: 'Some text1', date: '2012-09-01'},
            {id: 2, data: 'Some text2', date: '2014-02-01'},
            {id: 3, data: 'Some text3', date: '2017-07-21'},
            {id: 4, data: 'Some text4', date: '2013-12-03'},
            {id: 5, data: 'Some text5', date: '2018-05-11'},
        ], 
        shortNameDoc: [
            {name: 'СЛИ', checked: false},
            {name: 'СЛИИ', checked: false},
            {name: 'Ведомость', checked: false},
            {name: 'Приказ', checked: false},
        ]
    }

    handlerInput = (event) => {
        const eventData = event.target.value
        if(eventData.length >= 3) {
            //Здесь делаем запрос к БД
            console.log('Запрос к БД.....');
            const shortNameDoc = [...this.state.shortNameDoc] 
            console.log(shortNameDoc);
            
            
        }else {
            //Выдаем сообщение пользователю о недостаточности символов
            console.log('До запроса', (2 - eventData.length), ' символ');

        }
        
    }

    //This method changes the flag in the checkboxes.
    handlerCheckBox(check, index) {
        const docCheck = this.state.shortNameDoc[index]           
        docCheck.checked = check
        const shortNameDoc = [...this.state.shortNameDoc]
        shortNameDoc[index] = docCheck
        this.setState({
            shortNameDoc
        })
    }
    

    render() {
        return (
            <div className="App">
                <Input onChangeInput={this.handlerInput.bind(this)} />

                {this.state.shortNameDoc.map((shortName, ind) => {
                            return (
                                <CheckBox 
                                    key={ind}
                                    name={shortName.name}
                                    checked={shortName.checked}
                                    onChangeCheckBox={event => this.handlerCheckBox(event.target.checked, ind)}    
                                />
                            )
                        }
                    )
                }
                
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
 