import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../lib/colors";

const States = [
  {
    id: 1,
    Location: "All State",
  },
  {
    id: 2,
    Location: "Rivers State",
  },
  {
    id: 3,
    Location: "Abuja, FCT",
  },
  {
    id: 4,
    Location: "Lagos State",
  },
  {
    id: 5,
    Location: "Kano State",
  },
  {
    id: 6,
    Location: "Kano State",
  },
];

const FilterComp = ({ ListHeaderComponent, ListFooterComponent }: any) => {
  return (
    <View>
      <FlatList
        horizontal={false}
        scrollEnabled={true}
        columnWrapperStyle={styles.row}
        data={States}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.stateBox}>
              <Text>{item.Location} </Text>
            </View>
          );
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        numColumns={3}
      />
    </View>
  );
};

export default FilterComp;

const styles = StyleSheet.create({
  stateBox: {
    width: 96,
    height: 48,
    marginBottom: 12,
    borderRadius: 7,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
