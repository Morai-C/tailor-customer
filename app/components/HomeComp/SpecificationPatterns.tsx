import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const patternData = [
  {
    id: 1,
    image: require("../../assets/Specification/spec_add.png"),
  },
  {
    id: 2,
    image: require("../../assets/Specification/spec_1.png"),
  },
  {
    id: 3,
    image: require("../../assets/Specification/spec_2.png"),
  },
  {
    id: 4,
    image: require("../../assets/Specification/spec_3.png"),
  },
  {
    id: 5,
    image: require("../../assets/Specification/spec_4.png"),
  },
  {
    id: 6,
    image: require("../../assets/Specification/spec_5.png"),
  },
];

const SpecificationPatterns = (props: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={patternData}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={{ marginRight: 21 }} source={item.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default SpecificationPatterns;

const styles = StyleSheet.create({});
