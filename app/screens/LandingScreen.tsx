import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../lib/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_app";

const LandingScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 31 }}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <Text style={[globalStyles.textSemiBold, styles.title]}>
        Easily find tailors around
      </Text>
      <Text
        style={[
          globalStyles.textMedium,
          {
            color: "#9f99a3",
            fontSize: 14,
            textAlign: "center",
            marginHorizontal: 25,
            marginVertical: 20,
          },
        ]}
      >
        Fashionista is a platform for tailors. Easily be seen, show off your
        works & connect with customers
      </Text>

      <View style={{ marginBottom: 27 }}>
        <Text
          style={[globalStyles.textMedium, { color: "#000000", fontSize: 14 }]}
        >
          10k tailors onboard and counting
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 86 }}>
        <Image source={require("../assets/profile/avatar_1.png")}></Image>
        <Image source={require("../assets/profile/avatar_2.png")}></Image>
        <Image source={require("../assets/profile/avatar_3.png")}></Image>
        <Image source={require("../assets/profile/avatar_4.png")}></Image>
        <Image source={require("../assets/profile/avatar_5.png")}></Image>
        <Image source={require("../assets/profile/avatar_6.png")}></Image>
      </View>

      <View
        style={{ flexDirection: "column", margin: 20, paddingVertical: 20 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ee4e34",
            paddingHorizontal: 41,
            paddingVertical: 14,
            borderRadius: 11,
            width: 289,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={[
              globalStyles.textMedium,
              { textAlign: "center", color: "#ffffff", fontSize: 14 },
            ]}
          >
            Create an account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            globalStyles.textMedium,
            {
              textAlign: "center",
              color: "#9f99a3",
              fontSize: 12,
              marginRight: 5,
            },
          ]}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={[
              globalStyles.textMedium,
              { color: "#ee4e34", fontSize: 12 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#160221",
    fontSize: 24,
  },
});
