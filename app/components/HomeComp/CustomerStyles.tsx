import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const styleData = [
  {
    id: 1,
    image: require("../../assets/dresses/style_1.png"),
  },
  {
    id: 2,
    image: require("../../assets/dresses/style_2.png"),
  },
  {
    id: 3,
    image: require("../../assets/dresses/style_3.png"),
  },
  {
    id: 4,
    image: require("../../assets/dresses/style_4.png"),
  },
  {
    id: 5,
    image: require("../../assets/dresses/style_5.png"),
  },
  {
    id: 6,
    image: require("../../assets/dresses/style_6.png"),
  },
];

const CustomerStyles = ({ ListHeaderComponent, ListFooterComponent }: any) => {
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        horizontal={false}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        data={styleData}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <ImageBackground
                style={styles.styleImage}
                resizeMode="cover"
                source={item.image}
              ></ImageBackground>
            </View>
          );
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        numColumns={2}
      />
    </View>
  );
};

export default CustomerStyles;

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  styleImage: {
    width: 154,
    height: 193,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
