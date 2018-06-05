import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, HashRouter, IndexRoute } from 'react-router-dom';
import Main from 'Main';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('app');

  ReactDOM.render(<div>
    <HashRouter>
      <Route path="/" component={Main} />
    </HashRouter>
  </div>,
  reactRoot);
})
