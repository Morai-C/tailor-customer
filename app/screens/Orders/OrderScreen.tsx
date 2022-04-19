import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";
import OrderTabs from "../../components/OrderComp/OrderTabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OrdersStackParamList } from "../../Navigation/NavigationStackProps";

const OrderScreen = ({
  navigation,
}: NativeStackScreenProps<OrdersStackParamList>) => {
  return (
    <View style={styles.container}>
      <Text
        style={[globalStyles.textRegular, { fontSize: 9, marginBottom: 15 }]}
      >
        View all your orders and saved items
      </Text>

      <View>
        <OrderTabs navigation={navigation} />
      </View>

      <View></View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    //paddingTop: 60,
    paddingHorizontal: 20,
  },
});
