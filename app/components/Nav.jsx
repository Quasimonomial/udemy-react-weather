import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <NavLink to="/" activeClassName='active' exact>Home</NavLink> |
      <NavLink to="/about" activeClassName='active' exact>About</NavLink> |
      <NavLink to="/examples" activeClassName='active' exact>Examples</NavLink> |
      <NavLink to="/weather" activeClassName='active' exact>Weather</NavLink>
    </div>
  )
}

export default Nav;
