import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppRoutes } from './src/routes';
import { theme } from './src/theme';

import { AuthProvider } from '@/contexts/Auth/AuthProvider';
import { OfflineProvider } from '@/contexts/Offiline/OffilineProvider';
import { ToastProvider } from '@/contexts/Toast/ToastProvider';
import { RealmProvider } from '@/libs/realmDB';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <RealmProvider>
            <AuthProvider>
              <OfflineProvider>
                <AppRoutes />
              </OfflineProvider>
            </AuthProvider>
          </RealmProvider>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
