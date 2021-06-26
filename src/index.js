import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, DefaultTheme } from 'ice-cube/themes';

import App from './App';
import './css/playground.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'light', ...DefaultTheme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
