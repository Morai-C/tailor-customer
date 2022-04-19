import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChatStackParamList } from "../../Navigation/NavigationStackProps";
import { globalStyles } from "../../lib/global";
import { RootStackParamList } from "../../_app";
import { useNavigation } from "@react-navigation/native";

type Props = {
  name?: string;
  message?: string;
  timeDelivered?: any;
  source?: any;
  navigation?: any;
};

const ChatCard = ({
  name,
  message,
  timeDelivered,
  source,
  navigation,
}: Props): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 26,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={source} style={{ marginRight: 20 }} />
        <View>
          <Text style={[globalStyles.textSemiBold, { fontSize: 13 }]}>
            {name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat", { screen: "Messages" })}
          >
            <Text style={[globalStyles.textLight, { fontSize: 10 }]}>
              {message}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[globalStyles.textMedium, { fontSize: 10 }]}>
        {timeDelivered}
      </Text>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
