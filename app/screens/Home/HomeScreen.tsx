import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import TopTailors from "../../components/TopTailors";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import PostCard from "../../components/HomeComp/PostCard";

const { width, height } = Dimensions.get("window");

const postData = [
  {
    id: 1,
    image: require("../../assets/posts/post_1.png"),
  },
  {
    id: 2,
    image: require("../../assets/posts/post_2.png"),
  },
  {
    id: 3,
    image: require("../../assets/posts/post_3.png"),
  },
  {
    id: 4,
    image: require("../../assets/posts/post_4.png"),
  },
  {
    id: 5,
    image: require("../../assets/posts/post_5.png"),
  },
  {
    id: 6,
    image: require("../../assets/posts/post_6.png"),
  },
  {
    id: 7,
    image: require("../../assets/posts/post_7.png"),
  },
  {
    id: 8,
    image: require("../../assets/posts/post_8.png"),
  },
];

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text style={[globalStyles.textBold, { fontSize: 24, marginLeft: 18 }]}>
          Hi, Sophia
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() =>
            navigation.navigate("Home", { screen: "NotificationScreen" })
          }
        >
          <Image
            source={require("../../assets/icons/notification.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 25 }}>
        <Text style={[globalStyles.textRegular, { fontSize: 9 }]}>
          Welcome to Tailosta
        </Text>
      </View>

      <View style={{ marginBottom: 30 }}>
        <TopTailors />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {postData.map((item, i) => (
          <View key={item.id}>
            <PostCard navigation={navigation} source={item.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 19,
  },
});
