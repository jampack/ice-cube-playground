import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'ice-cube/themes';
import { useSelector } from 'react-redux';
import { AllComponentsPage, ButtonPage, CheckboxPage, RadioPage, TextFieldPage, SelectPage } from './pages';
import withMasterLayout from './pages/layouts/MasterLayout';

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={{ mode: themeMode, ...DefaultTheme }}>
      <Router>
        <Switch>
          <Route path='/button' component={withMasterLayout(ButtonPage)} />
          <Route path='/checkbox' component={withMasterLayout(CheckboxPage)} />
          <Route path='/radio' component={withMasterLayout(RadioPage)} />
          <Route path='/text-field' component={withMasterLayout(TextFieldPage)} />
          <Route path='/select' component={withMasterLayout(SelectPage)} />
          <Route path='/' component={AllComponentsPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
