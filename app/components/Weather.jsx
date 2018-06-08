import React from 'react'
import WeatherDisplay from 'WeatherDisplay'
import WeatherForm from 'WeatherForm'

class Weather extends React.Component {
  handleSearch (location) {
    alert(location);
  }

  render () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherDisplay />
      </div>
    )
  }
}

export default Weather;
