import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationRouteContext } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import { globalStyles } from "../../lib/global";
import AddressCard from "../../components/HomeComp/AddressCard";
import colors from "../../lib/colors";
import { BtnLg } from "../../lib/ButtonComp";

const { width, height } = Dimensions.get("window");

const AddressbookScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            marginRight: 11,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 35 }}>
        <View style={{ marginBottom: 17 }}>
          <AddressCard
            name="Braide Shekinah"
            selected={<Image source={require("../../assets/icons/tick.png")} />}
            address="60 Professor Okujagu Road"
            city=" Trans-amadi, Port Harcourt"
            state="Rivers State, Nigeria"
            item={
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 13,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/rededit.png")}
                    style={{ marginRight: 3 }}
                  />
                  <Text
                    style={[
                      globalStyles.textRegular,
                      { fontSize: 11, color: colors.primary },
                    ]}
                  >
                    Edit
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/icons/reddelete.png")}
                    style={{ marginRight: 3 }}
                  />
                  <Text
                    style={[
                      globalStyles.textRegular,
                      { fontSize: 11, color: colors.primary },
                    ]}
                  >
                    Delete
                  </Text>
                </View>
              </View>
            }
          />
        </View>

        <View style={{ marginBottom: 44 }}>
          <AddressCard
            name="Braide Shekinah"
            selected={<Image source={require("../../assets/icons/tick.png")} />}
            address="204 Aba Road By Presidential Hotel"
            city=" Trans-amadi, Port Harcourt"
            state="Rivers State, Nigeria"
            item={
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 13,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/rededit.png")}
                    style={{ marginRight: 3 }}
                  />
                  <Text
                    style={[
                      globalStyles.textRegular,
                      { fontSize: 11, color: colors.primary },
                    ]}
                  >
                    Edit
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/icons/reddelete.png")}
                    style={{ marginRight: 3 }}
                  />
                  <Text
                    style={[
                      globalStyles.textRegular,
                      { fontSize: 11, color: colors.primary },
                    ]}
                  >
                    Delete
                  </Text>
                </View>
              </View>
            }
          />
        </View>

        <BtnLg
          text={"Add New Address"}
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
          onPress={() =>
            navigation.navigate("Home", { screen: "NewAddressScreen" })
          }
        />
      </View>
    </View>
  );
};

export default AddressbookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
});
