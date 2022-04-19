import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_app";
import { globalStyles } from "../../lib/global";
import InputBox from "../../lib/InputBox";
import { BtnLg } from "../../lib/ButtonComp";

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 25 }}>
      <Text style={[globalStyles.textSemiBold, styles.title]}>Register</Text>
      <Text style={[globalStyles.textRegular, styles.subText]}>
        {" "}
        Let's connect you with tailors
      </Text>

      <View style={{ marginBottom: 30 }}>
        <InputBox placeholderText="First Name" />
        <InputBox placeholderText="Last Name" />
        <InputBox placeholderText="Phone Number" />
        <InputBox placeholderText="Password" />
        <InputBox placeholderText="Confirm password" />
      </View>

      <View style={{ marginBottom: 36 }}>
        <BtnLg
          text={"Proceed"}
          backgroundColor="#ee4e34"
          customStyle={{
            marginBottom: 20,
            paddingHorizontal: 41,
            paddingVertical: 14,
          }}
          onPress={() => navigation.navigate("Verify")}
        />
        <BtnLg
          text={"Signup with Google"}
          borderColor="#ee4e34"
          borderWidth={2}
          textStyle={{ color: "#979595" }}
          customStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 41,
            paddingVertical: 14,
          }}
          item={
            <ImageBackground
              style={styles.btnImage}
              source={require("../../assets/icons/google.png")}
            />
          }
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#000000",
  },
  subText: {
    paddingBottom: 30,
    fontSize: 12,
    color: "#9f99a3",
  },
  btnImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
