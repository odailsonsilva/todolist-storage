import React from 'react';

import { ThemeProvider } from '@shopify/restyle';

import { AppRoutes } from './src/routes';
import { theme } from './src/theme';

function App(): React.JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
