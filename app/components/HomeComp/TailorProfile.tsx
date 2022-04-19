import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import { BtnLg } from "../../lib/ButtonComp";
import colors from "../../lib/colors";

const { width, height } = Dimensions.get("window");

const TailorProfile = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginBottom: 42,
        marginTop: 24,
      }}
    >
      <View
        style={{
          height: height * 0.2,
        }}
      >
        <ImageBackground
          source={require("../../assets/background4x.png")}
          resizeMode="cover"
          style={{
            height: height * 0.1,
            width: "100%",
          }}
          imageStyle={{ borderTopLeftRadius: 7, borderTopRightRadius: 7 }}
        >
          <Image
            source={require("../../assets/profile/user.png")}
            style={{ position: "absolute", top: "50%", left: "5%" }}
          />
        </ImageBackground>

        <View style={{}}>
          <View style={styles.box}>
            <View>
              <Text style={styles.title}>98%</Text>
              <Text style={styles.category}>WORK RATE</Text>
            </View>

            <View>
              <Text style={styles.title}>1.5K</Text>
              <Text style={styles.category}>CONNECTIONS</Text>
            </View>

            <View>
              <Text style={styles.title}>702</Text>
              <Text style={styles.category}>CUSTOMERS</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={[globalStyles.textBold, { fontSize: 18 }]}>
            Chris Kennedy
          </Text>
          <Text style={[globalStyles.textRegular, { fontSize: 10 }]}>
            Fashionista at Dablo Design Agency
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/icons/connect.png")} />
          <BtnLg
            text="Connect"
            backgroundColor={colors.primary}
            customStyle={{
              width: 60,
              height: 26,
              color: colors.primary,
              borderRadius: 42,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 12,
            }}
            textStyle={{ fontSize: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default TailorProfile;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width * 0.55,
    marginTop: 15,
    position: "absolute",
    left: "40%",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    fontSize: 9,
  },
  category: {
    fontFamily: "Poppins_300Light",
    fontSize: 7,
  },
});
