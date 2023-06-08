import { storiesOf } from "@storybook/react-native";
import { Button } from "react-native-paper";
import { View, Alert } from "react-native";
import React from "react";

storiesOf('Button', module).add('default', () => (
    <View style={{ flex: 1, justifyContent: "space-around", padding: 16 }}>
        <Button onPress={() => Alert.alert("Pressed!")} mode="contained">
        contained
        </Button>
        <Button onPress={() => Alert.alert("Pressed!")} mode="contained-tonal">
        contained-tonal
        </Button>
        <Button onPress={() => Alert.alert("Pressed!")} mode="elevated">
        elevated
        </Button>
        <Button onPress={() => Alert.alert("Pressed!")} mode="outlined">
        outlined
        </Button>
        <Button onPress={() => Alert.alert("Pressed!")} mode="text">
        text
        </Button>
    </View>

));