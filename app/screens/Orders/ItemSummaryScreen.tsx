import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderItem from "../../components/OrderComp/OrderItem";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";

type Props = {};

const ItemSummaryScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            backgroundColor: "rgba(151, 149, 149, 0.1)",
            paddingHorizontal: 9,
            paddingVertical: 18,
            borderRadius: 7,
            marginBottom: 20,
          }}
        >
          <OrderItem
            source={require("../../assets/Order/Order_1.png")}
            orderStatus={"PENDING"}
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
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text
            style={[globalStyles.textLight, { fontSize: 10, marginBottom: 6 }]}
          >
            PAYMENT
          </Text>
          <View
            style={{
              backgroundColor: "rgba(151, 149, 149, 0.1)",
              height: 57,
              paddingLeft: 15,
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 7,
            }}
          >
            <Text style={[globalStyles.textSemiBold, { fontSize: 13 }]}>
              Payment Method
            </Text>
            <Text style={[globalStyles.textMedium, { fontSize: 10 }]}>
              Cash On Delivery
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={[globalStyles.textLight, { fontSize: 10, marginBottom: 6 }]}
          >
            DELIVERY
          </Text>
          <View
            style={{
              backgroundColor: "rgba(151, 149, 149, 0.1)",
              height: 135,
              borderRadius: 7,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                paddingBottom: 13,
                borderBottomWidth: 2,
                borderBottomColor: "#E6E6E6",
                paddingLeft: 15,
              }}
            >
              <Text style={[globalStyles.textSemiBold, { fontSize: 13 }]}>
                Delivery Option
              </Text>
              <Text style={[globalStyles.textMedium, { fontSize: 10 }]}>
                Standard Door Delivery
              </Text>
            </View>

            <View style={{ marginTop: 13, paddingLeft: 15 }}>
              <Text style={[globalStyles.textSemiBold, { fontSize: 13 }]}>
                Shipping Address
              </Text>
              <Text style={[globalStyles.textMedium, { fontSize: 10 }]}>
                Plot 60 Prof., Okujagu Rd, Off Trans Amadi Road {"\n"} Port
                Harcourt
              </Text>
            </View>
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
    </View>
  );
};

export default ItemSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    marginTop: 20,
    paddingBottom: 22,
    borderBottomWidth: 2,
    paddingHorizontal: 18,
    borderBottomColor: "#E6E6E6",
    paddingLeft: 15,
  },
  bottom: {
    paddingTop: 20,
    paddingHorizontal: 18,
  },
});
