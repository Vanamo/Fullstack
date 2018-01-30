import React from 'react'
import personService from '../../src/services/persons'


class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
    }

    deletePerson = (person) => () => {
        if (window.confirm("Poistetaanko " + person.name + "?")) {
            personService
                .del(person.id)
                .then(response => {
                    this.setState({
                        show: false,
                    })
                })
        }
    }

    render = () => {
        if (!this.state.show) {
            return null
        }
        const person = this.props.person
        return (
            <tr>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td><button onClick={this.deletePerson(person)}>Poista</button></td>
            </tr>
        )
    }
}


export default Person