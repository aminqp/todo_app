import './styles/fonts/index.css';

import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider as StoreProvider } from 'react-redux';

import { configureStore } from '#store';
import { appTheme } from '#styles';
import { Http } from '#widgets';

import locales from './locale';

const { store } = configureStore();

Http.createInstance();

const AppConfig = ({ children }) => (
  <StoreProvider store={store}>
    <IntlProvider
      locale={locales.en.language}
      key={locales.en.key}
      messages={locales.en.messages}
    >
      <ThemeProvider theme={appTheme}>
        {children}
      </ThemeProvider>
    </IntlProvider>
  </StoreProvider>
);

AppConfig.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppConfig;
