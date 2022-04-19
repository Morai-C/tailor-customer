import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Data = [
  {
    id: 1,
    image: require("../assets/user/user_1.png"),
  },
  {
    id: 2,
    image: require("../assets/user/user_2.png"),
  },
  {
    id: 3,
    image: require("../assets/user/user_3.png"),
  },
  {
    id: 4,
    image: require("../assets/user/user_4.png"),
  },
  {
    id: 5,
    image: require("../assets/user/user_5.png"),
  },
  {
    id: 6,
    image: require("../assets/user/user_6.png"),
  },
  {
    id: 7,
    image: require("../assets/user/user_7.png"),
  },
  {
    id: 8,
    image: require("../assets/user/user_8.png"),
  },
  {
    id: 9,
    image: require("../assets/user/user_9.png"),
  },
  {
    id: 10,
    image: require("../assets/user/user_10.png"),
  },
  {
    id: 11,
    image: require("../assets/user/user_11.png"),
  },
  {
    id: 12,
    image: require("../assets/user/user_12.png"),
  },
];

const TopTailors = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.imageBox}>
                <Image style={{ marginRight: 21 }} source={item.image} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TopTailors;

const styles = StyleSheet.create({
  imageBox: {
    paddingHorizontal: 5,
  },
});
