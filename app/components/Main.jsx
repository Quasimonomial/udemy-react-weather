import React from 'react';
import { Route, Switch } from 'react-router-dom'

import About from 'About';
import Examples from 'Examples';
import Nav from 'Nav';
import Weather from 'Weather';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="grid-container">
          <div className="grid-x">
            <div className="cell large-4 medium-3"></div>
            <div className="cell large-4 medium-6">
              <Switch>
                <Route path="/" component={Weather} exact/>
                <Route path="/about" component={About} />
                <Route path="/examples" component={Examples} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
