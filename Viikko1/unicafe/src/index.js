import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    keskiarvo = () => {
        return (
            (this.state.hyva - this.state.huono) / (this.state.hyva 
            + this.state.neutraali + this.state.huono)
        )
    }

    positiivisia = () => {
        return (
            this.state.hyva / (this.state.hyva 
                + this.state.neutraali + this.state.huono) * 100
            )
    }

    asetaArvoon = (palaute) => () => {
        if (palaute === 'hyva') {
            this.setState({hyva: this.state.hyva + 1})
        }  else if (palaute === 'neutraali') {
            this.setState({neutraali: this.state.neutraali + 1})
        } else if (palaute === 'huono') {
            this.setState({huono: this.state.huono + 1})
        }
    }

    render() {   
        return (
            <div>
                <h1>Anna palautetta</h1>

                <Button 
                    funktio={this.asetaArvoon}
                    palaute={'hyva'}
                    text="hyvä"
                />
                <Button 
                    funktio={this.asetaArvoon}
                    palaute={'neutraali'}
                    text="neutraali"
                />
                <Button 
                    funktio={this.asetaArvoon}
                    palaute={'huono'}
                    text="huono"
                />

                <Statistics 
                    state={this.state}
                    keskiarvo={this.keskiarvo()}
                    positiivisia={this.positiivisia()}
                />
            </div>           
        )
    }
}

const Button = (props) => {
    const {funktio, palaute, text} = props
    return (
        <button onClick={funktio(palaute)}>
            {text}
        </button>
    )        
}

const Statistic = (props) => {
    const {text, state, text2} = props
    return (
        <tr>
            <td>{text}</td> 
            <td>{state} {text2}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const {state, keskiarvo, positiivisia} = props
    if (state.hyva === 0 && state.neutraali === 0 && 
        state.huono === 0) {
            return (
                <div>                
                    <h1>Statistiikka</h1>
                    <p>Ei yhtään palautetta annettu</p>
                </div>
            )
        }
    return (
        <div>
            <h1>Statistiikka</h1>

            <table>
                <tbody>
                    <Statistic
                        text="hyvä"
                        state={state.hyva}
                        text2 = ''
                    />
                    <Statistic
                        text="neutraali"
                        state={state.neutraali}
                        text2 = ''
                    />
                    <Statistic
                        text="huono"
                        state={state.huono}
                        text2 = ''
                    />
                    <Statistic
                        text="keskiarvo"
                        state={keskiarvo}
                        text2 = ''
                    />
                    <Statistic
                        text="positiivisia"
                        state={positiivisia}
                        text2 = '%'
                    />
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)