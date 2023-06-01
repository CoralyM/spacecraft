import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";

import { default as data } from "../../api/data.json";
import StarshipFeedItem from "../components/StarshipFeedItem";
import ScreenContainer from "../components/ScreenContainer";

export const StarshipFeedScreen = () => {
  return (
    <ScreenContainer additionalStyle={styles.container}>
        <FlatList
            data={data.results}
            renderItem={StarshipFeedItem}
        />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    paddingHorizontal: 20,
  },
});