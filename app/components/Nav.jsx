import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault()
    alert('No one knows')
  }

  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Travis's Bad Ass Weather News</li>
            <li>
              <NavLink to="/" activeClassName='active' exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='active' exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName='active' exact>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>

      </div>
    )
  }
}

export default Nav;
