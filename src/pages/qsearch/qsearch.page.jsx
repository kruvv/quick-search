import React, { Component } from 'react'
import '../../App.css'
import Input from '../../components/input/input.component'
import Output from '../../components/output/output.component'
import CheckBox from '../../components/checkbox/checkbox.component'


const BASE_URL = 'https://jsonplaceholder.typicode.com'
const POSTS = '/posts'
const QUERY = '_limit=200'


//This component is a quick search form highlighting matching characters.
class Qsearch extends Component {

    state = {
        documents: [
            //{userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
            
        ], 
        shortNameDoc: [
            {name: 'СЛИ', checked: false},
            {name: 'СЛИИ', checked: false},
            {name: 'Ведомость', checked: false},
            {name: 'Приказ', checked: false},
        ], 
        
    }
    
    //This method processes the input string.
    handlerInput = (event) => {
        const inputData = event.target.value        
        const url = `${BASE_URL}${POSTS}?${QUERY}`

        if(inputData.length >= 2) {
            //Здесь делаем запрос к БД или источнику данных
            console.log('Запрос к БД.....')

            //TODO: Для запроса из БД нужно сделать обработку чекбоксов
            // const shortNameDoc = [...this.state.shortNameDoc]
            // shortNameDoc.map(name => console.log(name.checked))
            
           this.fetchDocuments(url)

           setTimeout(() => {
                this.markSearch(inputData)
           }, 100)
            

        }else if(inputData.length === 0) {
            //Clear array
            let documents = [...this.state.documents]
            documents = []
            this.setState({documents})
        }
         else {
            //Выдаем сообщение пользователю о недостаточности символов
            console.log('До запроса', (2 - inputData.length), ' символ')

        }
        
    }
    //This method searches for words that have matching character combinations.
    markSearch(data) {       
        const val = data.trim()
        const elasticItems = document.querySelectorAll(".outputSearch")
            if(val !== "") { 
                elasticItems.forEach(element => {                    
                    const elementLength = element.innerText.search(val)
                        
                        if(elementLength === -1) {
                            element.classList.add("hide")
                            element.innerHTML = element.innerText
                        }else {
                            element.classList.remove("hide")
                            let str = element.innerText
                            element.innerHTML = this.insertMark(str, elementLength, val.length)
                        }
                    })
                }else {
                    elasticItems.forEach(element => {
                        element.classList.remove("hide")
                        element.innerHTML = element.innerText
                    })
                }
    }

    //This method marks words with matching character combinations.
    insertMark(stroka, pos, len) {
        return stroka.slice(0, pos) + 
            '<mark>' + 
            stroka.slice(pos, pos + len) + 
            '</mark>' + 
            stroka.slice(pos + len)
    }

    //This method queries the data source.
    fetchDocuments(urlLink) {       
        fetch(urlLink)
        .then(response => response.json())
        .then(json => {
            let documents = [...this.state.documents]
            documents = json
            this.setState({documents})
        })
        .catch(console.error)
        
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
                                    {...shortName}
                                    /* name={shortName.name}
                                    checked={shortName.checked} */
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
                                    {...docum}
                                    /* userId={docum.userId}
                                    id={docum.id}
                                    title={docum.title}
                                    body={docum.body}  */                                   
                                />
                            )
                        }
                    )
                }
            
            </div>
            
        )       

    }

}

export default Qsearch
 