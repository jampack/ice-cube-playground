import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AllComponentsPage, ButtonPage, CheckboxPage, RadioPage, TextFieldPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/button' component={ButtonPage} />
        <Route path='/checkbox' component={CheckboxPage} />
        <Route path='/radio' component={RadioPage} />
        <Route path='/text-field' component={TextFieldPage} />
        <Route path='/' component={AllComponentsPage} />
      </Switch>
    </Router>
  );
};

export default App;
