import React from 'react'
import Person from './components/Person'
import personService from './services/persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
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
      }

      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          const persons = this.state.persons.concat(response.data)
          this.setState({
            persons,
            newName: '',
            newNumber: ''
          })
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
    this.setState({ [type]: event.target.value })
  }

  handleFilter = (event) => {
    const filter = event.target.value
    this.setState({
      filter
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <div>
          rajaa näytettäviä
            <input
            value={this.state.filter}
            onChange={this.handleFilter}
          />
        </div>

        <h3>Lisää uusi</h3>
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
              {this.state.persons
                .filter(person => 
                  person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                .map(person => <Person key={person.id}
                person={person} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App