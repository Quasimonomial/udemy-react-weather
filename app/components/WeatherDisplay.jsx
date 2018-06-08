import React from 'react'

class WeatherDisplay extends React.Component {
  render () {
    var {location, temperature} = this.props;
    return (
      <p>It is {temperature} degrees F in {location}</p>
    )
  }
}

export default WeatherDisplay;
