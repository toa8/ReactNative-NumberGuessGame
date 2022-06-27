import { StyleSheet, Text } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 6,
    padding: 12,
  },
});
