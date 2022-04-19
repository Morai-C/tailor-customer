import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";

type Props = {
  statusBoxStyle?: any;
  source: any;
  onPress?: () => any;
  orderStatus: string;
};

const OrderItem = ({ statusBoxStyle, source, onPress, orderStatus }: Props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: 29 }}>
          <Image source={source} style={{ height: 118 }} />
        </View>

        <View>
          <TouchableOpacity onPress={onPress}>
            <Text style={[globalStyles.textSemiBold, { fontSize: 16 }]}>
              Stylish Men 2021 Senator {"\n"} Dress
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              globalStyles.textRegular,
              { fontSize: 14, marginBottom: 2 },
            ]}
          >
            Candace Fashion House
          </Text>
          <Text
            style={[globalStyles.textLight, { fontSize: 10, marginBottom: 5 }]}
          >
            Order #313199291
          </Text>
          <View style={[statusBoxStyle]}>
            <Text
              style={[
                globalStyles.textLight,
                { fontSize: 10, color: colors.primaryLight },
              ]}
            >
              {orderStatus}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
