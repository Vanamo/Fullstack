import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    for (var i = 0; i < this.state.persons.length; i++) {
      if (this.state.persons[i].name === this.state.newName) { 
        this.setState({
          newName: ''
        }) 
    } 
    
      const personObject = {
          name: this.state.newName,
          id: this.state.persons.length + 1
      }
  
      const persons = this.state.persons.concat(personObject)
  
      this.setState({
          persons,
          newName: ''
      })
    }

  }
  

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

          <div>
            <form onSubmit={this.addPerson}>
              nimi: 
              <input 
                value={this.state.newName}
                onChange={this.handleNameChange}
              />
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
        </div>
        
        <h2>Numerot</h2>
          <div>
            {this.state.persons.map(person => <Person key={person.id} person={person} />)}
          </div>
      </div>
    )
  }
}

export default App