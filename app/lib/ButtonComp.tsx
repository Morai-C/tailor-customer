import React, { useState } from "react";
import {
  StyleProp,
  TextStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Switch,
} from "react-native";
import colors from "./colors";

type Props = {
  text: string;
  onPress?: () => void;
  customStyle?: any;
  textStyle?: any;
  isChecked?: boolean;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  item?: any;
};

const { width, height } = Dimensions.get("window");

export const BtnLg: React.FC<Props> = ({
  text,
  backgroundColor,
  borderColor,
  customStyle,
  textStyle,
  color,
  item,
  onPress,
  borderWidth,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        customStyle,
        { borderColor, backgroundColor, borderWidth },
      ]}
      onPress={onPress}
    >
      {item}
      <Text style={[styles.btnText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const SwitchBtn = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  };

  return (
    <View>
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        trackColor={{ false: "grey", true: "tomato" }}
        thumbColor={colors.primaryLight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 11,
    width: width * 0.85,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
});
