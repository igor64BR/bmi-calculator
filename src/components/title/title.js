import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.titleText}>ONE BIT HEALTH</Text>
    </View>
  );
}
