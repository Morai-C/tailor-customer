import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

type Props = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  message?: string;
  messageStyle?: StyleProp<TextStyle>;
  timeDelivered?: any;
  timeStyle?: StyleProp<TextStyle>;
  source?: any;
  navigation?: any;
  onPress?: () => any;
};

const NotificationCard = ({
  title,
  titleStyle,
  message,
  messageStyle,
  timeDelivered,
  timeStyle,
  source,
  navigation,
  onPress,
}: Props) => {
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
          <Text style={titleStyle}>{title}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={messageStyle}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={timeStyle}>{timeDelivered}</Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
