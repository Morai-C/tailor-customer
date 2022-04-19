import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import InputBox from "../../lib/InputBox";
import { BtnLg } from "../../lib/ButtonComp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MoreStackParamList } from "../../Navigation/NavigationStackProps";

const { width, height } = Dimensions.get("window");

const AddCardScreen = ({
  navigation,
}: NativeStackScreenProps<MoreStackParamList>) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textBold, { fontSize: 24, marginBottom: 24 }]}>
        Add new bank details
      </Text>

      <View style={{ marginBottom: 28 }}>
        <Text
          style={[
            globalStyles.textMedium,
            { fontSize: 13, color: colors.primary },
          ]}
        >
          Card Number
        </Text>
        <InputBox
          placeholderText="Enter card number"
          Styles={{ width: width * 0.9 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 31,
        }}
      >
        <View style={{ marginRight: 15 }}>
          <Text
            style={[
              globalStyles.textMedium,
              { fontSize: 13, color: colors.primary },
            ]}
          >
            Expiry Date
          </Text>
          <InputBox
            placeholderText="01/12"
            style={{
              color: "rgb(51, 51, 51)",

              fontSize: 16,
            }}
            Styles={{
              width: 143,
              height: 44,
              backgroundColor: "rgba(235, 235, 235, 0.32)",
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
          />
        </View>
        <View>
          <Text
            style={[
              globalStyles.textMedium,
              { fontSize: 13, color: colors.primary },
            ]}
          >
            CVV
          </Text>
          <InputBox
            placeholderText="CVV"
            keyboardType="phone-pad"
            style={{
              fontSize: 16,
              color: "rgb(51, 51, 51)",
            }}
            Styles={{
              width: 143,
              height: 44,
              borderRadius: 6,
              paddingHorizontal: 16,
              backgroundColor: "rgba(235, 235, 235, 0.32)",
            }}
          />
        </View>
      </View>

      <BtnLg
        text="ADD CARD"
        backgroundColor={colors.primary}
        customStyle={{
          marginBottom: 20,
          width: width * 0.9,
          height: 51,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        textStyle={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
