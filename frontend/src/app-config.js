import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Provider as StoreProvider } from 'react-redux';

import { configureStore } from '#store';
import { appTheme } from '#styles';
import { Flex } from '#widgets';

import locales from './locale';

const { store } = configureStore();

const AppConfig = ({ children }) => (
  <StoreProvider store={store}>
    <IntlProvider
      locale={locales.en.language}
      key={locales.en.key}
      messages={locales.en.messages}
    >
      <ThemeProvider theme={appTheme}>
        <Flex
          flex={1}
          justifyContent="center"
        >
          <FormattedMessage id="app-name" />
        </Flex>
        {children}
      </ThemeProvider>
    </IntlProvider>
  </StoreProvider>
);

AppConfig.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppConfig;
