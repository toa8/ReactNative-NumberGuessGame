import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/colors";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const startNewGame = () => {
    setUserNumber(null);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen userNumber={userNumber} startNewGame={startNewGame} />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootPage}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootPage: {
    flex: 1,
  },
});
