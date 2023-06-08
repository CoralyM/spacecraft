import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";
import { Text } from "react-native-paper";

import { useImage } from "../hooks/UseImage";
import { ScreenContainer } from "../components/ScreenContainer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarshipDetailsScreen = ({ navigation, route }: any) => {
  const { props } = route.params;

  const image = useImage(props.name);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: props.name,
    });
  }, [navigation, props]);

  return (
    <ScreenContainer title="" optionalStyle={{ marginHorizontal: 10 }}>
      <Image source={image} style={styles.starshipImg} />
      <Text variant="titleLarge">{props.name}</Text>
      <Text variant="titleMedium">{props.manufacturer}</Text>
      <Text variant="bodyMedium">{props.hyperdrive_rating}</Text>
      <Text variant="bodyMedium">{props.max_atmosphering_speed}</Text>
      <View style={styles.twoColumnsData}>
        <Text>crew</Text>
        <Text>{props.crew}</Text>
      </View>
      <View style={styles.twoColumnsData}>
        <Text>passengers</Text>
        <Text>{props.passengers}</Text>
      </View>
      <View style={styles.twoColumnsData}>
        <Text>consumables</Text>
        <Text>{props.consumables}</Text>
      </View>
      <View style={styles.twoColumnsData}>
        <Text>cargo_capacity</Text>
        <Text>{props.cargo_capacity}</Text>
      </View>
    </ScreenContainer>
  );
};

export default StarshipDetailsScreen;

const styles = StyleSheet.create({
  starshipImg: {
    alignSelf: "center",
  },
  twoColumnsData: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});