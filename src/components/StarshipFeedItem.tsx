import { StyleSheet } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

import { useImage } from "../hooks/UseImage";

const StarshipFeedItem = ({ item }: any) => {
  const image = useImage(item.name);

  return (
    <Card style={styles.container}>
      <Card.Cover source={image} />
      <Card.Title title={item.name} />
      <Card.Content>
        <Text>Model: {item.model}</Text>
        <Text>Crew: {item.crew}</Text>
        <Text>Hyperdriving Rating: {item.hyperdriving_rating}</Text>
        <Text>Cost: {item.cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};

export default StarshipFeedItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
