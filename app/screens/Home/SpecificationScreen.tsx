import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import InputBox from "../../lib/InputBox";
import SpecificationPatterns from "../../components/HomeComp/SpecificationPatterns";
import colors from "../../lib/colors";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";

const { width, height } = Dimensions.get("window");

interface specificationProp {
  max: any;
  navigation: any;
}

const SpecificationScreen = ({ max, navigation }: specificationProp) => {
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState(0);

  const increment = () => {
    if (qty >= max) {
      setQty(max);
    } else {
      setQty(qty + 1);
    }
  };

  const decrement = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  const onChange = (e: any) => {
    const value = e.target.value;
    if (value <= 0) {
      setQty(0);
    } else if (value >= max) {
      setQty(max);
    } else {
      setQty(value);
    }
  };

  const incrementSize = () => {
    if (size >= max) {
      setSize(max);
    } else {
      setSize(qty + 1);
    }
  };

  const decrementSize = () => {
    if (size <= 0) {
      setSize(0);
    } else {
      setSize(qty - 1);
    }
  };

  const onChangeSize = (e: any) => {
    const value = e.target.value;
    if (value <= 0) {
      setSize(0);
    } else if (value >= max) {
      setSize(max);
    } else {
      setSize(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(151, 149, 149, 0.1)",
            borderRadius: 7,
            height: 97,
            alignItems: "center",
            paddingHorizontal: 8,
            marginBottom: 21,
          }}
        >
          <View style={{ marginRight: 31 }}>
            <Image source={require("../../assets/Order/purchase_1.png")} />
          </View>
          <View>
            <Text style={[globalStyles.textSemiBold, { fontSize: 14 }]}>
              Fashion Dress For Women
            </Text>
            <Text style={[globalStyles.textLight, { fontSize: 11 }]}>
              Lorem ipsum, or lpsum as it {"\n"} is sometimes known...
            </Text>
            <Text style={[globalStyles.textSemiBold, { fontSize: 14 }]}>
              ₦ 24,650
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 9 }}>
          <Text style={[globalStyles.textBold, { fontSize: 14 }]}>
            Quantity
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable onPress={decrement}>
              <View
                style={{
                  width: 47,
                  height: 52,
                  backgroundColor: "rgba(235, 235, 235, 0.32)",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/icons/decrement_icon.png")}
                />
              </View>
            </Pressable>
            <InputBox
              onChange={(e: any) => onChange(e)}
              placeholderText={qty.toLocaleString()}
              Styles={{ width: 196, height: 50 }}
              keyboardType="phone-pad"
            />
            <Pressable onPress={increment}>
              <View
                style={{
                  width: 47,
                  height: 52,
                  backgroundColor: "rgba(235, 235, 235, 0.32)",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/icons/increment_icon.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>

        <View style={{ marginBottom: 9 }}>
          <Text style={[globalStyles.textBold, { fontSize: 14 }]}>Size</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable onPress={decrementSize}>
              <View
                style={{
                  width: 47,
                  height: 52,
                  backgroundColor: "rgba(235, 235, 235, 0.32)",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/icons/decrement_icon.png")}
                />
              </View>
            </Pressable>
            <InputBox
              onChange={(e: any) => onChangeSize(e)}
              value={size.toString()}
              Styles={{ width: 196, height: 50 }}
              keyboardType="phone-pad"
            />
            <Pressable onPress={incrementSize}>
              <View
                style={{
                  width: 47,
                  height: 52,
                  backgroundColor: "rgba(235, 235, 235, 0.32)",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/icons/increment_icon.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>

        <View>
          <Text
            style={[globalStyles.textBold, { fontSize: 14, marginBottom: 15 }]}
          >
            Patterns
          </Text>

          <View>
            <SpecificationPatterns />
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
            Proceed to Delivery
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Home", { screen: "DeliveryScreen" })
            }
          >
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
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SpecificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  top: {
    paddingTop: 20,
    paddingBottom: 29,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
  },
  bottom: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
