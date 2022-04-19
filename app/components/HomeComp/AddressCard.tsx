import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";
import { BtnLg } from "../../lib/ButtonComp";

type Props = {
  name: string;
  address: string;
  state: string;
  city: string;
  selected?: JSX.Element;
  item?: JSX.Element;
};

const { width, height } = Dimensions.get("window");

const AddressCard = ({ name, address, state, city, selected, item }: Props) => {
  return (
    <View>
      <View
        style={{
          height: 145,
          width: width * 0.9,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: colors.primary,
          paddingHorizontal: 14,
          paddingVertical: 14,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[globalStyles.textBold, { fontSize: 14 }]}>{name}</Text>
          <View
            style={{
              width: 26,
              height: 26,
              backgroundColor: colors.primary,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
            }}
          >
            {selected}
          </View>
        </View>
        <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
          {address}
        </Text>
        <Text style={[globalStyles.textLight, { fontSize: 12 }]}>{city}</Text>
        <Text style={[globalStyles.textLight, { fontSize: 12 }]}>{state}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[globalStyles.textLight, { fontSize: 12 }]}>
            08035045045
          </Text>
          {item}
        </View>
      </View>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({});
