// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NetworkProvider } from 'react-native-offline';

import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { ScrollView } from 'react-native';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {

  const queryClient = new QueryClient()

  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NetworkProvider>
          {/*<ScrollView>
                  <LoginScreen />
                  <TermsScreen />
                </ScrollView>
                */}
          <StarshipFeedScreen/>
        </NetworkProvider>
      </QueryClientProvider >
    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;