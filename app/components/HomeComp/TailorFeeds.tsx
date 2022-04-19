import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";

type Props = {
  source: any;
};

const TailorFeeds = ({ source }: Props) => {
  return (
    <View style={styles.postBox}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/profile/avatar_5.png")}
            style={{ marginRight: 14 }}
          />
          <View>
            <View>
              <Text
                style={[
                  globalStyles.textBold,
                  { fontSize: 15, marginRight: 6 },
                ]}
              >
                Charis
              </Text>
            </View>
            <Text
              style={[
                globalStyles.textRegular,
                { fontSize: 9, marginBottom: 14 },
              ]}
            >
              Fashionista at Devvie Designs
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={[globalStyles.textRegular, { fontSize: 12, marginBottom: 20 }]}
        >
          Lorem ipsum, or lipsum as it is sometimes {"\n"} known, is dummy text
          used
        </Text>
      </View>

      <Image source={source} style={{ width: "100%", height: 255 }} />
    </View>
  );
};

export default TailorFeeds;

const styles = StyleSheet.create({
  postBox: {
    backgroundColor: "#fffaf3",
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 27,
    marginBottom: 18,
  },
});
