import React from 'react'

const OneCountry = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <img style={{ height: "auto", width: "80px" }} src={country.flag} alt="flag"></img>
        </div>
    )
}

export default OneCountry