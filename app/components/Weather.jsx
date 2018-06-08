import React from 'react'
import WeatherDisplay from 'WeatherDisplay'
import WeatherForm from 'WeatherForm'

class Weather extends React.Component {
  render () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm />
        <WeatherDisplay />
      </div>
    )
  }
}

export default Weather;
