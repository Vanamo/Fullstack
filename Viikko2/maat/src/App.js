import React from 'react'
import axios from 'axios'
import Country from './components/Country'
import OneCountry from './components/OneCountry'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      showCountries: true,
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleChange = (event) => {
    const filter = event.target.value
    this.setState({
      filter
    })    

    const filteredCountries = this.state.countries
      .filter(country => country.name.toLowerCase()
      .includes(filter.toLowerCase()))
    
    if (filteredCountries.length <= 10) {
      this.setState({
        showCountries: true
      })
    } else {
      this.setState({
        showCountries: false
      })
    }
  }

  render() {

    const filteredCountries = this.state.countries
      .filter(country => country.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))

    let answer = null
    if (filteredCountries.length > 10) {
      answer = 'Too many matches, specify another filter'
    } else if (filteredCountries.length === 1) {
      answer = filteredCountries.map(country =>
        <OneCountry key={country.numericCode} country={country} />)
    } else {
      answer = filteredCountries.map(country =>
        <Country key={country.numericCode} country={country} />)
    }

    return (
      <div>
        find countries:
        <input
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <div>
          {answer}
        </div>
      </div>
    )
  }
}

export default App;
