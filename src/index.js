import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
