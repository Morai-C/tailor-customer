import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { BtnLg } from "../../lib/ButtonComp";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MoreStackParamList } from "../../Navigation/NavigationStackProps";

const transactions = [
  {
    id: 1,
    image: require("../../assets/profile/fash_1.png"),
    title: "Condace Fashion House",
    time: "05:53 PM",
    price: "N22 000",
  },
  {
    id: 2,
    image: require("../../assets/profile/fash_2.png"),
    title: "Fashionista's Name",
    time: "01:38 PM",
    price: "N12 000",
  },
  {
    id: 3,
    image: require("../../assets/profile/fash_3.png"),
    title: "Bella's Fashion Agency",
    time: "01:38 PM",
    price: "N36 000",
  },
];

const { width, height } = Dimensions.get("window");

type Props = {};

const PaymentScreen = ({
  navigation,
}: NativeStackScreenProps<MoreStackParamList>) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Image
          source={require("../../assets/icons/atm.png")}
          style={{ marginBottom: 22 }}
        />

        <View>
          <BtnLg
            onPress={() =>
              navigation.navigate("More", { screen: "AddCardScreen" })
            }
            text={"Add payment method"}
            backgroundColor="rgba(238, 78, 52, 0.08)"
            textStyle={{
              color: colors.primary,
              fontSize: 14,
              fontFamily: "Poppins_500Medium",
            }}
            customStyle={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: width * 0.7,
              paddingHorizontal: 41,
              paddingVertical: 14,
              borderRadius: 9,
            }}
            item={
              <ImageBackground
                style={styles.btnImage}
                source={require("../../assets/icons/add_red.png")}
              />
            }
          />
        </View>
      </View>

      <View style={{ marginBottom: 17 }}>
        <Text
          style={[globalStyles.textBold, { fontSize: 14, marginBottom: 22 }]}
        >
          Transactions
        </Text>
        <Text style={[globalStyles.textLight, { fontSize: 10 }]}>
          25 JUN 2021
        </Text>
      </View>

      {transactions.map((item, i) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={item.image} style={{ marginRight: 20 }} />
            <View>
              <Text
                style={[
                  globalStyles.textSemiBold,
                  { fontSize: 13, color: colors.primaryDark },
                ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  globalStyles.textRegular,
                  { fontSize: 13, color: colors.primaryDark },
                ]}
              >
                {item.time}
              </Text>
            </View>
          </View>
          <Text
            style={[
              globalStyles.textSemiBold,
              { fontSize: 12, color: colors.primary },
            ]}
          >
            {item.price}
          </Text>
        </View>
      ))}

      <View>
        <Text
          style={[globalStyles.textLight, { fontSize: 10, marginBottom: 17 }]}
        >
          25 JUN 2021
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/profile/fash_4.png")}
              style={{ marginRight: 20 }}
            />
            <View>
              <Text
                style={[
                  globalStyles.textSemiBold,
                  { fontSize: 13, color: colors.primaryDark },
                ]}
              >
                Bella's Fashion Agency
              </Text>
              <Text
                style={[
                  globalStyles.textRegular,
                  { fontSize: 13, color: colors.primaryDark },
                ]}
              >
                01:38PM
              </Text>
            </View>
          </View>
          <Text
            style={[
              globalStyles.textSemiBold,
              { fontSize: 12, color: colors.primary },
            ]}
          >
            N36, 000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  btnImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
