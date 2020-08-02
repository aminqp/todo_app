import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import App from './App';
import AppConfig from './app-config';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';

const { store } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <AppConfig>
        <App />
      </AppConfig>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
