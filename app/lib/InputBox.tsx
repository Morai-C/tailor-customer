import {
  Dimensions,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { Props } from "react";

type InputProps = {
  placeholderText?: string;
  value?: string;
  Styles?: ViewStyle;
  style?: TextStyle;
  color?: string;
  onChangeText?: (text: string) => void;
  onChange?: any;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const { width, height } = Dimensions.get("window");

const InputBox = ({
  value,
  placeholderText,
  Styles,
  style,
  color,
  onChange,
  keyboardType,
  ...rest
}: InputProps) => {
  return (
    <View>
      <TextInput
        {...rest}
        onChange={onChange}
        placeholderTextColor="#9f99a3"
        style={[styles.inputBox, Styles]}
        placeholder={placeholderText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    width: width * 0.85,
    height: 50,
    backgroundColor: "rgba(235, 235, 235, 0.32)",
    borderRadius: 11,
    paddingHorizontal: 16,
    color: "rgb(51, 51, 51)",
    marginVertical: 9,
    fontSize: 16,
  },
});
