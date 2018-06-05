import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/examples">Examples</Link> |
        <Link to="/weather">Weather</Link>
      </div>
    )
  }
}

export default Nav;
