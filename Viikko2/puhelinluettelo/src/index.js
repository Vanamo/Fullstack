import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
    { 
        name: 'Arto Hellas',
        number: '0123456',
        id: 1
    },
    { name: 'Martti Tienari', number: '040-123456', id: 2 },
    { name: 'Arto Järvinen', number: '040-123456', id: 3 },
    { name: 'Lea Kutvonen', number: '040-123456', id: 4 }
]

ReactDOM.render(
    <App persons={persons} />,
    document.getElementById('root')
)