import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Appbar, Button } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";

import { Routes } from "./Routes";
import { useAuthentication } from "../context/Authentification";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
          <>
            <Stack.Screen
              name={Routes.STARSHIP_FEED_SCREEN}
              component={StarshipFeedScreen}
              options={{
                headerShown: true,
                headerTitle: "Starships",
                header: (props) => <CustomNavigationBar {...props} />
              }}
            />
            <Stack.Screen
              name={Routes.STARSHIP_DETAIL_SCREEN}
              component={StarshipDetailScreen}
              options={{
                headerShown: true,
                presentation: "modal",
                animation: "slide_from_bottom",
                headerBackVisible: false,
                headerRight: ModalCloseButton,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomNavigationBar = ({ navigation, route, options, back}) => {
    const title = getHeaderTitle(options, route.name);
    return (
        <Appbar>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title}/>
        </Appbar>
    )
}

const ModalCloseButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      icon="close"
      mode="text"
      onPress={() => {
        navigation.goBack();
      }}
    >
      Fermer
    </Button>
  );
};
