import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, IndexRoute } from 'react-router-dom';
import Main from './components/Main';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('app');

  ReactDOM.render(<div>
    <HashRouter>
      <Route path="/" component={Main}>

      </Route>
    </HashRouter>
  </div>,
  reactRoot);
})
