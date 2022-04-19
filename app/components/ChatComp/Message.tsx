import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";

type Props = {
  time?: any;
  isLeft?: any;
  message?: string;
};

const Message = ({ time, isLeft, message }: Props) => {
  const isOnLeft = (type: any): any => {
    if (isLeft && type === "messageContainer") {
      return {
        alignSelf: "flex-start",
        backgroundColor: colors.grey,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 17,
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17,
      };
    } else if (isLeft && type === "message") {
      return {
        color: colors.primaryDark,
      };
    } else if (isLeft && type === "time") {
      return {
        color: colors.primaryDark,
      };
    } else {
      return {
        borderTopRightRadius: 0,
      };
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.messageContainer, isOnLeft("messageContainer")]}>
        <View style={styles.messageView}>
          <Text
            style={[
              globalStyles.textRegular,
              styles.message,
              isOnLeft("message"),
            ]}
          >
            {message}
          </Text>
        </View>
        <View style={styles.timeView}>
          <Text
            style={[globalStyles.textRegular, styles.time, isOnLeft("time")]}
          >
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 5,
  },
  messageContainer: {
    backgroundColor: "rgba(238, 78, 52, 0.08)",
    maxWidth: "85%",
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingVertical: 14,
    marginHorizontal: 10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
    paddingHorizontal: 20,
  },
  messageView: {
    backgroundColor: "transparent",
    maxWidth: "80%",
  },
  timeView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  message: {
    color: colors.primary,
    alignSelf: "flex-start",
    fontSize: 12,
  },
  time: {
    color: colors.primary,
    alignSelf: "flex-end",
    fontSize: 8,
  },
});
