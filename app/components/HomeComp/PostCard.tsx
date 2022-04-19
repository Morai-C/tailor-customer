import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import CustomerScreen from "../../screens/Home/CustomerScreen";

type Props = {
  source?: any;
  navigation?: any;
};

const { width, height } = Dimensions.get("window");

const PostCard = ({ source, navigation }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <View>
      <ImageBackground
        style={styles.bgImage}
        source={source}
        imageStyle={{
          borderRadius: 16,
        }}
      >
        <View style={styles.detailBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", { screen: "CustomerScreen" })
              }
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View style={{ flexDirection: "row", marginBottom: 6 }}>
                  <Image
                    style={{ width: 17, height: 17, marginRight: 8 }}
                    source={require("../../assets/profile/avatar_5.png")}
                  />
                  <Text style={[globalStyles.textRegular, { fontSize: 12 }]}>
                    Tailor's Name
                  </Text>
                </View>
                <Text style={[globalStyles.textBold, { fontSize: 16 }]}>
                  Cloth style
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setLiked(!liked);
                }}
              >
                {liked ? (
                  <Image source={require("../../assets/icons/redlike.png")} />
                ) : (
                  <Image source={require("../../assets/icons/like.png")} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  bgImage: {
    resizeMode: "cover",
    width: width * 0.9,
    height: 581,
    marginBottom: 20,
  },
  detailBox: {
    width: "100%",
    height: height * 0.1,
    backgroundColor: colors.grey,
    position: "absolute",
    bottom: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
