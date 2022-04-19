import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import AddressCard from "../../components/HomeComp/AddressCard";
import { globalStyles } from "../../lib/global";
import { RadioButton } from "react-native-paper";
import colors from "../../lib/colors";
import { AntDesign } from "@expo/vector-icons";
import { BtnLg } from "../../lib/ButtonComp";

const DeliveryScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>): JSX.Element => {
  const [value, setValue] = useState<string>("Door Delivery");
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ paddingTop: 35, marginBottom: 28 }}>
          <AddressCard
            name="Braide Shekinah"
            selected={<Image source={require("../../assets/icons/tick.png")} />}
            address="60 Professor Okujagu Road"
            city=" Trans-amadi, Port Harcourt"
            state="Rivers State, Nigeria"
            item={
              <BtnLg
                text="Edit"
                backgroundColor={colors.primaryDark}
                customStyle={{
                  width: 66,
                  height: 30,
                  color: colors.primaryLight,
                  borderRadius: 35,
                  justifyContent: "center",
                  //marginLeft: 9,
                }}
                textStyle={{ fontSize: 12, fontFamily: "Poppins_500Medium" }}
                onPress={() =>
                  navigation.navigate("Home", { screen: "AddressbookScreen" })
                }
              />
            }
          />
        </View>

        <View>
          <Text
            style={[globalStyles.textBold, { fontSize: 14, marginBottom: 15 }]}
          >
            Delivery Method
          </Text>

          <View>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View style={{ flexDirection: "row", marginBottom: 26 }}>
                <View style={{ marginRight: 9 }}>
                  <RadioButton
                    value="Door Delivery"
                    color={colors.primaryDark}
                  />
                </View>
                <View>
                  <Text style={[globalStyles.textSemiBold, { fontSize: 12 }]}>
                    Door Delivery
                  </Text>
                  <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
                    Delivered between Tuesday 01 June and {"\n"} Wednesday 02
                    June
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 9 }}>
                  <RadioButton
                    value="Pick Up From Store"
                    color={colors.primaryDark}
                  />
                </View>
                <View>
                  <Text style={[globalStyles.textSemiBold, { fontSize: 12 }]}>
                    Pick Up From Store
                  </Text>
                  <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
                    Trans-amadi, Port Harcourt
                  </Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text
          style={[globalStyles.textBold, { fontSize: 14, marginBottom: 15 }]}
        >
          Purchase Info
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
            Shipping
          </Text>
          <Text style={[globalStyles.textLight, { fontSize: 12 }]}>N0</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
            Subtotal
          </Text>
          <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
            N24,650
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={[globalStyles.textSemiBold, { fontSize: 14 }]}>
            Total
          </Text>
          <Text style={[globalStyles.textSemiBold, { fontSize: 14 }]}>
            N24,650
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "flex-end",
          //backgroundColor: "yellow",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            //backgroundColor: "green",
            flexGrow: 0.5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[globalStyles.textMedium, { fontSize: 14 }]}>
            Proceed to Payment
          </Text>
          <View
            style={{
              width: 52,
              height: 47,
              backgroundColor: colors.primary,
              borderRadius: 7,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="arrowright"
              size={24}
              color={colors.primaryLight}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  top: {
    paddingBottom: 54,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
  },
  bottom: { paddingHorizontal: 20, paddingTop: 20, marginBottom: 40 },
});
