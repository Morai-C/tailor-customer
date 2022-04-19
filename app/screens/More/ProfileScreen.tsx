import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import ProfileTabs from "../../components/MoreComp/ProfileTabs";

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textBold, { fontSize: 24, marginBottom: 24 }]}>
        Profile
      </Text>
      <ProfileTabs />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
