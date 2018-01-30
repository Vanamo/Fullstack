import React from 'react'
//import personService from '../../src/services/persons'


class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
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
                <td><button onClick={this.props.deletePerson(person)}>Poista</button></td>
            </tr>
        )
    }
}


export default Person