import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import GlobalStyle from './components/GlobalStyle';

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
