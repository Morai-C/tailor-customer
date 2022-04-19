import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderItem from "./OrderItem";

const orderList = [
  {
    id: 1,
    image: require("../../assets/Order/Order_1.png"),
  },
  {
    id: 2,
    image: require("../../assets/Order/Order_2.png"),
  },
  {
    id: 3,
    image: require("../../assets/Order/Order_3.png"),
  },
  {
    id: 4,
    image: require("../../assets/Order/Order_4.png"),
  },
];

type Prop = {
  statusBoxStyle: any;
  ListHeaderComponent?: any;
  ListFooterComponent?: any;
  onPress?: () => any;
  orderStatus: string;
};

const OrderList = ({
  statusBoxStyle,
  ListHeaderComponent,
  ListFooterComponent,
  onPress,
  orderStatus,
}: Prop) => {
  return (
    <View>
      <FlatList
        horizontal={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={orderList}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginBottom: 50 }}>
              <OrderItem
                source={item.image}
                statusBoxStyle={statusBoxStyle}
                onPress={onPress}
                orderStatus={orderStatus}
              />
            </View>
          );
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
