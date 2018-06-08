import React from 'react'
import WeatherDisplay from 'WeatherDisplay'
import WeatherForm from 'WeatherForm'

class Weather extends React.Component {
  constructor (props) {
    super()

    this.state = {
      location: 'Miami',
      temperature: 88
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (location) {
    this.setState({
      location: location,
      temperature: 23
    })
  }

  render () {
    var {location, temperature} = this.state
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherDisplay location={location} temperature={temperature}/>
      </div>
    )
  }
}

export default Weather;
