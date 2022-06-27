import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonOuterCotainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterCotainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    padding: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
