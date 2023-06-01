import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";

import { default as data } from "../../api/data.json";
import StarshipFeedItem from "../components/StarshipFeedItem";

export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={data.results}
            renderItem={StarshipFeedItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    paddingHorizontal: 20,
  },
});