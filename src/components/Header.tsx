import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={[styles.container]}>
      <Text variant="headlineMedium" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});
