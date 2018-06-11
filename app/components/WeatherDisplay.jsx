import React from 'react'

const WeatherDisplay = ({temperature, location}) => {
  return (
    <p>It is {temperature} degrees F in {location}</p>
  )
}

export default WeatherDisplay;
