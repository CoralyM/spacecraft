import { StyleSheet } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

import { useImage } from "../hooks/UseImage";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

interface StarshipFeedItemProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  crew: string;
}

const StarshipFeedItem = (props: StarshipFeedItemProps) => {
  const { name, model, manufacturer, cost_in_credits, crew } = props;
  const image = useImage(name);

  const navigation = useNavigation();

  return (
    <Card style={styles.container} onPress={() => navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {props})}>
      <Card.Cover source={image} />
      <Card.Title title={name} />
      <Card.Content>
        <Text>Model: {model}</Text>
        <Text>Crew: {crew}</Text>
        <Text>Manufacturer : {manufacturer}</Text>
        <Text>Cost: {cost_in_credits}</Text>
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
