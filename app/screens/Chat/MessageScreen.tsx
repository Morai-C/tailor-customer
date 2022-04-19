import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChatStackParamList } from "../../Navigation/NavigationStackProps";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import ChatInput from "../../components/ChatComp/ChatInput";
import ChatConversation from "../../components/ChatComp/ChatConversation";

type Props = {
  children: string;
  tintColor?: string;
};

export const HeaderTitle = (props: Props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("../../assets/profile/chat_1.png")} />
        <View style={{ marginLeft: 9 }}>
          <Text style={[globalStyles.textSemiBold, { fontSize: 16 }]}>
            Jane Fleming
          </Text>
          <Text
            style={[
              globalStyles.textRegular,
              { fontSize: 12, color: colors.primary },
            ]}
          >
            Active
          </Text>
        </View>
      </View>
    </View>
  );
};

const MessageScreen = ({
  navigation,
}: NativeStackScreenProps<ChatStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/more.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <ChatConversation />
      <ChatInput />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
  },
});
