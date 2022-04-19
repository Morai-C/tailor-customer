import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import PersonalComp from "./PersonalComp";
import SecurityComp from "./SecurityComp";

const tabNav = [
  {
    name: "PERSONAL",
  },
  {
    name: "SECURITY",
  },
  {
    name: "PAYMENT INFO",
  },
];

const ProfileTabs = () => {
  const [tab, setTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 55,
        }}
      >
        {tabNav.map((item, i) => (
          <View key={i}>
            <TouchableOpacity onPress={() => setTab(i)}>
              <Text
                style={[
                  globalStyles.textSemiBold,
                  i === tab
                    ? styles.activeButton
                    : { fontSize: 13, color: colors.primaryDark },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tab === 0 && <PersonalComp />}
        {tab === 1 && <SecurityComp />}
      </ScrollView>
    </View>
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({
  activeButton: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});
