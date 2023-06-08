// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NetworkProvider } from "react-native-offline";
import { ScrollView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import StorybookUIRoot from "./.storybook";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NetworkProvider>
          {/*<ScrollView>
                  <LoginScreen />
                  <TermsScreen />
                </ScrollView>
                */}
          <StarshipFeedScreen />
        </NetworkProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
};

// Should we show storybook instead of our app?
const SHOW_STORYBOOK = false;
const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
// eslint-disable-next-line import/no-default-export
export default UI;
