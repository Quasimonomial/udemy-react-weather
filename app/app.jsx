import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, HashRouter, IndexRoute } from 'react-router-dom';
import Main from 'Main';

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load Css
require('style-loader!css-loader!sass-loader!applicationStyles')

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('app');

  ReactDOM.render(<div>
    <HashRouter>
      <Route path="/" component={Main} />
    </HashRouter>
  </div>,
  reactRoot);
})
