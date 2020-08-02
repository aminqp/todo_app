import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Provider as StoreProvider } from 'react-redux';

import locales from './locale';
import { configureStore } from './store';
import { appTheme } from './styles';

const { store } = configureStore();

const AppConfig = ({ children }) => (
  <StoreProvider store={store}>

    <IntlProvider
      locale={locales.en.language}
      key={locales.en.key}
      messages={locales.en.messages}
    >
      <ThemeProvider theme={appTheme}>
        <FormattedMessage id="app-name" />
        {children}
      </ThemeProvider>
    </IntlProvider>
  </StoreProvider>
);

export default AppConfig;
