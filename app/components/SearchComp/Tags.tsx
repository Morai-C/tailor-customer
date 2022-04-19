import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const TagOptions = [
  {
    id: 1,
    tag: "Men",
  },
  {
    id: 2,
    tag: "Women",
  },
  {
    id: 3,
    tag: "Children",
  },
  {
    id: 4,
    tag: "Fashion Houses",
  },
  {
    id: 5,
    tag: "Freelance",
  },
];

const Tags = (): JSX.Element => {
  return (
    <View style={styles.tagBox}>
      <FlatList
        horizontal
        data={TagOptions}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Text style={styles.tagText}> {item.tag} </Text>;
        }}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tagBox: {
    flexDirection: "row",
  },
  tagText: {
    backgroundColor: "rgba(238, 78, 52, 0.08)",
    paddingHorizontal: 28,
    paddingVertical: 10,
    marginRight: 15,
    borderRadius: 26,
    fontSize: 16,
    color: "rgb(238, 78, 52)",
  },
});
