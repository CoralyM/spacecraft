import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  RefreshControl,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

import { default as data } from "../../api/data.json";
import StarshipFeedItem from "../components/StarshipFeedItem";
import { useStarships } from "../hooks/UseStarships";
import { Offline } from "../components/Offline";

export const StarshipFeedScreen = () => {
  const starships = useStarships();

  if (starships.status === "loading") {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 20 }}
      >
        <Placeholder Animation={Fade}>
          <PlaceholderMedia
            style={{ width: "100%", height: 250, marginBottom: 20 }}
          />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={50} />
          <PlaceholderLine width={40} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia
            style={{ width: "100%", height: 250, marginBottom: 20 }}
          />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={50} />
          <PlaceholderLine width={40} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
    );
  } else if (starships.status === "error") {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text variant="headlineMedium">Error loading ships</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => (
          <StarshipFeedItem key={item.name + "-" + index} {...item} />
        )}
        keyExtractor={(item, index) => item.name + "-" + index}
        refreshControl={
          <RefreshControl
            refreshing={starships.isFetching}
            onRefresh={starships.refetch}
          />
        }
        ListHeaderComponent={<Offline />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    paddingHorizontal: 20,
  },
});
