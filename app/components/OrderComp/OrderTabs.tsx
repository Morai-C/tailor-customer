import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import OrderList from "./OrderList";

const orderNav = [
  {
    title: "ALL ORDERS",
  },
  {
    title: "PENDING",
  },
  {
    title: "DELIVERED",
  },
];

type Props = {
  onPress?: () => any;
  navigation: any;
};

const OrderTabs = ({ onPress, navigation }: Props) => {
  const [tab, setTab] = useState(0);

  const OrderNav = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 30,
          backgroundColor: colors.primaryLight,
          paddingBottom: 15,
        }}
      >
        {orderNav.map((item, i) => (
          <View key={i}>
            <TouchableOpacity onPress={() => setTab(i)}>
              <Text
                style={[
                  globalStyles.textSemiBold,
                  i === tab
                    ? styles.activeButton
                    : {
                        fontSize: 13,
                        color: colors.primaryDark,
                      },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View>
      {tab === 0 && (
        <OrderList
          orderStatus="Delivered"
          onPress={() =>
            navigation.navigate("Orders", { screen: "ItemSummaryScreen" })
          }
          ListHeaderComponent={OrderNav}
          ListFooterComponent={<View></View>}
          statusBoxStyle={{
            width: 74,
            height: 21,
            borderRadius: 5,
            backgroundColor: "#129827",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {tab === 1 && (
        <OrderList
          orderStatus="Pending"
          ListHeaderComponent={OrderNav}
          ListFooterComponent={<View></View>}
          statusBoxStyle={{
            width: 74,
            height: 21,
            borderRadius: 5,
            backgroundColor: "#edaa35",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {tab === 2 && (
        <OrderList
          orderStatus="Delivered"
          ListHeaderComponent={OrderNav}
          ListFooterComponent={<View></View>}
          statusBoxStyle={{
            width: 74,
            height: 21,
            borderRadius: 5,
            backgroundColor: "#129827",
            flexDirection: "row",
            justifyContent: "center",
          }}
        />
      )}
    </View>
  );
};

export default OrderTabs;

const styles = StyleSheet.create({
  activeButton: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});
