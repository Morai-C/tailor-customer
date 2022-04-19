import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../lib/global";

type Props = {};

const SplashScreen = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 44 }}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <Text style={[globalStyles.textBold, { fontSize: 31, color: "#ee4e34" }]}>
        Fash & Style
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 225,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
