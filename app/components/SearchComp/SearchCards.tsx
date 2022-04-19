import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";

const Categories = [
  {
    id: 1,
    image: require("../../assets/dresses/searchdress_3.png"),
    style: "Men's Traditional",
  },
  {
    id: 2,
    image: require("../../assets/dresses/searchdress_6.png"),
    style: "Gowns",
  },
  {
    id: 3,
    image: require("../../assets/dresses/searchdress_6.png"),
    style: "Bridal Wears",
  },
  {
    id: 4,
    image: require("../../assets/dresses/searchdress_3.png"),
    style: "Suits",
  },
  {
    id: 5,
    image: require("../../assets/dresses/searchdress_3.png"),
    style: "Ankara",
  },
  {
    id: 6,
    image: require("../../assets/dresses/searchdress_6.png"),
    style: "Sweater",
  },
];

const SearchCards = ({ ListHeaderComponent, ListFooterComponent }: any) => {
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        horizontal={false}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        data={Categories}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <ImageBackground
                style={styles.categoryImage}
                resizeMode="cover"
                source={item.image}
              >
                <View style={styles.overlay} />
                <Text style={[globalStyles.textBold, styles.categoryText]}>
                  {item.style}
                </Text>
              </ImageBackground>
            </View>
          );
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        numColumns={2}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default SearchCards;

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    alignItems: "center",
  },
  categoryImage: {
    width: 152,
    height: 162,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.primary,
    opacity: 0.23,
    width: 152,
    height: 162,
    borderRadius: 11,
  },
  categoryText: {
    color: colors.primaryLight,
    fontSize: 14,
    lineHeight: 1.2,
    marginTop: 10,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
