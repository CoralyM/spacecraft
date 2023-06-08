import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";

import { Routes } from "./Routes";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";
import { Button } from "react-native-paper";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} options={{headerShown: true, headerTitle: "Starships"}}/>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailScreen} options={{headerShown: true, presentation: "containedModal", animation: "slide_from_bottom", headerBackVisible: false, headerRight: ModalCloseButton}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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