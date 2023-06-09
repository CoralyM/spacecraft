import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook
  const isConnected = useIsConnected();

  return (
    <View>
      <Text style={{ fontWeight: "700", color: "red", textAlign: "center" }}>
        {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
        {!isConnected && (
          <>
            <ActivityIndicator animating />
            You are offline.
          </>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
