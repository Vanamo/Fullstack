import React from 'react'
import OneCountry from './OneCountry'


class Country extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
      }

    handleClick = () => {
        this.setState ({
            show: !this.state.show
        })
    }

    render = () => {
        const country = this.props.country
        return (
            <div>
                <div onClick={this.handleClick} style={{cursor: 'pointer'}}>
                    {country.name}
                </div>
                {this.state.show && 
                    <OneCountry key={country.numericCode} country={country} />
                }
            </div>
        )
    }
}
export default Country