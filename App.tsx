// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { ScrollView } from 'react-native';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';

const App = () => {
  return (
    <PaperProvider>
      {/*<ScrollView>
        <LoginScreen />
        <TermsScreen />
      </ScrollView>
      */}
    <StarshipFeedScreen/>
    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;