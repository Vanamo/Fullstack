import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    const {osat} = props
    return (
        <div>
            {osat.map(osa =>
            <Osa key={osa.id} osa={osa} />)
            }
        </div>
    )
}

const Yhteensa = (props) => {
    const {osat} = props
    const tehtavat = osat.map(osa => osa.tehtavia)
    const reducer = (acc, cur) => acc + cur
    const summa = tehtavat.reduce(reducer)

    return (
        <div>
            <p>yhteensä {summa} tehtävää</p>
        </div>
    )
}

const Osa = (props) => {
    const {osa} = props
    return (
        <div>
            <p>{osa.nimi} {osa.tehtavia}</p>
        </div>
    )
}

const Kurssi = (props) => {
    const {kurssi} = props 
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>        
    )
}

const App = () => {
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
          osat: [
            {
              nimi: 'Reactin perusteet',
              tehtavia: 10,
              id: 1
            },
            {
              nimi: 'Tiedonvälitys propseilla',
              tehtavia: 7,
              id: 2
            },
            {
              nimi: 'Komponenttien tila',
              tehtavia: 14,
              id: 3
            }
          ]
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
      ]
      

  return (
    <div>
        <h1>Opetusohjelma</h1>
        {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)