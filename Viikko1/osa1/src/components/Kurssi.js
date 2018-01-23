import React from 'react'

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>        
    )
}

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

export default Kurssi