import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";
import { BtnLg } from "../../lib/ButtonComp";
import { Ionicons } from "@expo/vector-icons";
import CustomerStyles from "../../components/HomeComp/CustomerStyles";

const { width, height } = Dimensions.get("window");

const CustomerScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/share_bg.png")}
            style={{ width: 30, height: 30, tintColor: "red" }}
          />
        </TouchableOpacity>
      ),
    });
  });

  const getHeader = (): JSX.Element => {
    return (
      <View>
        <ImageBackground
          style={styles.bgImage}
          source={require("../../assets/profile/profile_page_avatar.png")}
        >
          <View
            style={{
              width: 34,
              height: 34,
              backgroundColor: colors.primaryLight,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 24,
              position: "absolute",
              bottom: 17,
              left: 15,
            }}
          >
            <Image source={require("../../assets/icons/redlike.png")} />
          </View>
        </ImageBackground>

        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 9 }}>
                <Image source={require("../../assets/profile/avatar_5.png")} />
              </View>
              <View>
                <Text style={[globalStyles.textBold, { fontSize: 18 }]}>
                  Candace
                </Text>
                <Text style={[globalStyles.textRegular, { fontSize: 10 }]}>
                  200 Customers
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/icons/chat_icon.png")}
                style={{ tintColor: "#06175B" }}
              />
              <BtnLg
                onPress={() =>
                  navigation.navigate("Home", { screen: "SpecificationScreen" })
                }
                text="Purchase"
                backgroundColor={colors.primary}
                customStyle={{
                  width: 74,
                  height: 31,
                  color: colors.primary,
                  borderRadius: 35,
                  justifyContent: "center",
                  marginLeft: 9,
                }}
                textStyle={{ fontSize: 10 }}
              />
            </View>
          </View>

          <View>
            <Text style={[globalStyles.textBold, { fontSize: 20 }]}>
              Fashion Dress For Women
            </Text>
            <Text
              style={[
                globalStyles.textRegular,
                { fontSize: 14, marginBottom: 21 },
              ]}
            >
              Category
            </Text>
          </View>

          <View style={{ marginBottom: 29 }}>
            <Text style={[globalStyles.textSemiBold, { fontSize: 14 }]}>
              Description
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[globalStyles.textLight, { fontSize: 11 }]}>
                Lorem ipsum, or lpsum as it is sometimes known, is {"\n"} dummy
                text used. Ipsum as it is some
              </Text>
              <Ionicons name="md-chevron-down-sharp" size={24} color="black" />
            </View>
            <Text
              style={[
                globalStyles.textLight,
                { fontSize: 9, color: colors.primary },
              ]}
            >
              Read More
            </Text>
          </View>

          <View>
            <Text
              style={[
                globalStyles.textSemiBold,
                { fontSize: 14, textAlign: "center" },
              ]}
            >
              More from candace
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const getFooter = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
          marginBottom: 50,
        }}
      >
        <BtnLg
          onPress={() =>
            navigation.navigate("Home", { screen: "TailorScreen" })
          }
          text="Connect with Tailor"
          backgroundColor="rgba(238, 78, 52, 0.08)"
          customStyle={{
            paddingHorizontal: 41,
            paddingVertical: 14,
            borderRadius: 35,
            width: width * 0.8,
          }}
          textStyle={{ color: "rgb(238, 78, 52)" }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomerStyles
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
        />
      </View>
    </View>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    resizeMode: "cover",
    width,
    height: height * 0.55,
    marginBottom: 26,
  },
});
