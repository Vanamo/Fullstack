import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
    { 
        name: 'Arto Hellas',
        number: '0123456',
        id: 1
    }
]

ReactDOM.render(
    <App persons={persons} />,
    document.getElementById('root')
)