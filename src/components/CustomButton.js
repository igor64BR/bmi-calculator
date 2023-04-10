import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styleSheet from "../calculator/components/Body/style";

export default function CustomButton({
  title,
  style,
  buttonStyle,
  textStyle,
  onClick,
}) {
  const buttonDefaultStyle = StyleSheet.compose(styles.bodyStyle, buttonStyle);

  return (
    <View style={StyleSheet.compose(styleSheet.singleButton, style)}>
      <TouchableOpacity
        onPressIn={() => onClick(title)}
        style={buttonDefaultStyle}
      >
        <Text style={StyleSheet.compose(styles.textStyle, textStyle)}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    backgroundColor: "#191825",

    height: "100%",
    width: "100%",
    borderRadius: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "#E384FF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
