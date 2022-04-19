import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import { BtnLg } from "../../lib/ButtonComp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_app";

const VerificationScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <Text style={[globalStyles.textSemiBold, styles.title]}>
        Verification
      </Text>
      <Text style={[globalStyles.textRegular, styles.subText]}>
        {" "}
        Add the 5 digits sent to your contact
      </Text>

      <BtnLg
        text={"Verify Account"}
        backgroundColor="#ee4e34"
        customStyle={{
          marginBottom: 20,
          paddingHorizontal: 41,
          paddingVertical: 14,
        }}
        onPress={() => navigation.navigate("Tabs")}
      />
    </SafeAreaView>
  );
};

export default VerificationScreen;

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
});
