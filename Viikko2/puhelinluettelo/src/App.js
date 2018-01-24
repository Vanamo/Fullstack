import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
      newName: '',
      newNumber: ''
    }
  }

  isNew = () => {
    const tulos = this.state.persons
      .find(person => person.name === this.state.newName)
    console.log('tulos', tulos)

    return !tulos

  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.isNew()) {
    
        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            id: this.state.persons.length + 1
        }
    
        const persons = this.state.persons.concat(personObject)

        this.setState({
          persons,
          newName: '',
          newNumber: ''
        })
    
    } else {
        this.setState({
          newName: '',
          newNumber: ''
        })
      
        return (
          alert('Nimi on jo puhelinluettelossa')
        )
    }
  }



  handleChange = (type) => (event) => {
    console.log(event.target.value, type) 
    this.setState({[type]: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

          <div>
            <form onSubmit={this.addPerson}>
              <div>
                nimi: 
                <input 
                  value={this.state.newName}
                  onChange={this.handleChange('newName')}
                />
              </div>
              <div>
                numero: 
                <input 
                  value={this.state.newNumber}
                  onChange={this.handleChange('newNumber')}
                />
              </div>              
              <div>
                <button type="submit">lisää</button>
              </div>
            </form>
          </div>
        
        <h2>Numerot</h2>
          <div>
            <table>
              <tbody>
                {this.state.persons.map(person => <Person key={person.id} 
                  person={person} />)}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

export default App