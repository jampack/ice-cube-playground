import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ButtonPage, CheckboxPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/button' component={ButtonPage} />
        <Route path='/checkbox' component={CheckboxPage} />
        <Route path='/' component={ButtonPage} />
      </Switch>
    </Router>
  );
};

export default App;
