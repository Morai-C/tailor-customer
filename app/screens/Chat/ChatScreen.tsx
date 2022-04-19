import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import InputBox from "../../lib/InputBox";
import colors from "../../lib/colors";
import ChatCard from "../../components/ChatComp/ChatCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChatStackParamList } from "../../Navigation/NavigationStackProps";

const { width } = Dimensions.get("window");

const ChatScreen = ({
  navigation,
}: NativeStackScreenProps<ChatStackParamList>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[globalStyles.textBold, { fontSize: 24 }]}>Chat</Text>
        <Text
          style={[globalStyles.textRegular, { fontSize: 9, marginBottom: 10 }]}
        >
          Chat with your customers
        </Text>

        <InputBox
          placeholderText="Search message"
          Styles={{
            marginBottom: 30,
            borderRadius: 10,
            padding: 15,
            backgroundColor: "rgba(235, 235, 235, 0.32)",
            width: width * 0.88,
          }}
          style={{
            color: "rgb(51, 51, 51)",
            fontSize: 16,
          }}
        />

        <View>
          <ChatCard
            navigation={navigation}
            name={"Jane Fleming"}
            timeDelivered={"Wed"}
            source={require("../../assets/profile/chat_1.png")}
            message={
              "Lorem ipsum, or lipsum as it is sometimes \n known, is dummy text used"
            }
          />
          <ChatCard
            navigation={navigation}
            name={"Daniel Sonwu"}
            timeDelivered={"Tue"}
            source={require("../../assets/profile/chat_2.png")}
            message={"Lorem ipsum, or lipsum as it"}
          />
          <ChatCard
            navigation={navigation}
            name={"Taiwo Osokoya"}
            timeDelivered={"Mon"}
            source={require("../../assets/profile/chat_3.png")}
            message={"Lorem ipsum, or lipsum as it is sometimes"}
          />
          <ChatCard
            navigation={navigation}
            name={"Solomon Ndi"}
            timeDelivered={"Mon"}
            source={require("../../assets/profile/chat_4.png")}
            message={"De olor te estit is sometimes known, is   um"}
          />
          <ChatCard
            navigation={navigation}
            name={"Josh Finale"}
            timeDelivered={"Sat"}
            source={require("../../assets/profile/chat_3.png")}
            message={"or lipsum as it is sometimes known is \n dummy text used"}
          />
          <ChatCard
            navigation={navigation}
            name={"Daniel Sonwu"}
            timeDelivered={"Sun"}
            source={require("../../assets/profile/chat_6.png")}
            message={"Lorem ipsum, or lipsum as it"}
          />
          <ChatCard
            navigation={navigation}
            name={"Taiwo Osokoya"}
            timeDelivered={"Apr 4, 21"}
            source={require("../../assets/profile/chat_1.png")}
            message={"psum, or lipsum as it is sometimes"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    paddingTop: 60,
    paddingHorizontal: 25,
  },
});
