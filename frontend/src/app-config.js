import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { appTheme } from './styles';

const AppConfig = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    {children}
  </ThemeProvider>
);

export default AppConfig;
