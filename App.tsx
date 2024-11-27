import React from 'react';

import { ThemeProvider } from '@shopify/restyle';

import { AppRoutes } from './src/routes';
import { theme } from './src/theme';

import { OfflineProvider } from '@/contexts/Offiline/OffilineProvider';

function App(): React.JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <OfflineProvider>
        <AppRoutes />
      </OfflineProvider>
    </ThemeProvider>
  );
}

export default App;
