import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        selected: 0,
        aanet: [0, 0, 0, 0, 0]
        }
    }

    arvoSeuraava = () => {
        const random = Math.floor((Math.random() * 5) + 1)
        this.setState({selected: random})
    }

    aanesta = () => {
        let aanet = this.state.aanet
        aanet[this.state.selected] = this.state.aanet[this.state.selected] + 1
        this.setState({aanet: aanet})
    }

    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>has {this.state.aanet[this.state.selected]} votes</p>
                <Button 
                    funktio={this.aanesta}
                    text={'vote'}
                />
                <Button 
                    funktio={this.arvoSeuraava}
                    text={'next anecdote'}
                />
            </div>
        )
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
    const {funktio, text} = props
    return (
        <button onClick={funktio}>
            {text}
        </button>
    )        
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)