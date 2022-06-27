import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const InstructionText = ({ title, style }) => {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{title}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
