import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App.jsx';
import Quotes from './Component/Quotes/Quotes.jsx';
import Homepage from './Pages/Homepage.jsx';
import Playground from './Pages/Playground.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/play" component={Playground} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  </React.StrictMode>,
);
