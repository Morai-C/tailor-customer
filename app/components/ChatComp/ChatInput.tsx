import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../lib/colors";

type Props = {};

const ChatInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndCamera}>
          <TouchableOpacity style={styles.emoticonButton}>
            <Image source={require("../../assets/icons/emoticon_smile.png")} />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder="Type a message"
            style={styles.input}
          />
          <TouchableOpacity style={styles.righticonButton}>
            <Image source={require("../../assets/icons/camera_icon.png")} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image source={require("../../assets/icons/input_send.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputAndCamera: {
    flexDirection: "row",
    marginRight: 4,
    borderRadius: 34,
    flex: 3,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(235, 235, 235, 0.32)",
  },
  input: {
    paddingLeft: 20,
    flex: 3,
    maxHeight: 100,
    alignSelf: "center",
    fontSize: 13,
    paddingVertical: 17,
    color: colors.primaryDark,
  },
  righticonButton: {
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  emoticonButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
});
