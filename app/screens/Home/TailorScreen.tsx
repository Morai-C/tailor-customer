import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import { Feather } from "@expo/vector-icons";
import colors from "../../lib/colors";
import TailorProfile from "../../components/HomeComp/TailorProfile";
import { globalStyles } from "../../lib/global";
import TopTailors from "../../components/TopTailors";
import TailorFeeds from "../../components/HomeComp/TailorFeeds";

const feedData = [
  {
    id: 1,
    image: require("../../assets/posts/post_3.png"),
  },
  {
    id: 2,
    image: require("../../assets/posts/post_9.png"),
  },
  {
    id: 3,
    image: require("../../assets/posts/post_5.png"),
  },
  {
    id: 4,
    image: require("../../assets/posts/post_10.png"),
  },
  {
    id: 5,
    image: require("../../assets/posts/post_11.png"),
  },
];

const TailorScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Text style={[globalStyles.textBold, { fontSize: 24 }]}>
            Profile Detail
          </Text>
          <Text>Manage your posts</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TailorProfile />

        <View style={styles.connectionBox}>
          <Text
            style={[
              globalStyles.textRegular,
              { fontSize: 10, textTransform: "uppercase" },
            ]}
          >
            CONNECTIONS
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                globalStyles.textRegular,
                { fontSize: 10, color: colors.primary },
              ]}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 30 }}>
          <View style={{ paddingLeft: 15 }}>
            <TopTailors />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {feedData.map((item, i) => (
            <View key={item.id}>
              <TailorFeeds source={item.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TailorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    width: "100%",
  },
  connectionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
    paddingHorizontal: 20,
  },
});
