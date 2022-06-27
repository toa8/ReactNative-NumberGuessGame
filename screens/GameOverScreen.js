import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, startNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title title={"Game Over !"} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.textSummary}>
        Your phone needed <Text style={styles.textHighlight}>X</Text> rounds to
        guess the number <Text style={styles.textHighlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton title={"Start New Game"} onPress={startNewGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textSummary: {
    fontSize: 24,
    fontFamily: "open-sans",
    marginVertical: 12,
    textAlign: "center",
  },
  textHighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
