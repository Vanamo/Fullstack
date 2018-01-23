import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
    { 
        name: 'Arto Hellas',
        id: 1
    }
]

ReactDOM.render(
    <App persons={persons} />,
    document.getElementById('root')
)