import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";

type Props = {
  title?: string;
  description?: string;
  item?: JSX.Element;
  source?: any;
  color?: string;
  onPress?: () => void;
};

const MoreOptions = ({
  title,
  description,
  item,
  source,
  color,
  onPress,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 22,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={source} style={{ marginRight: 20 }} />
        <View>
          <Text
            style={[globalStyles.textRegular, { fontSize: 14, color: color }]}
          >
            {title}
          </Text>
          <Text
            style={[
              globalStyles.textRegular,
              { fontSize: 10, color: "#979595" },
            ]}
          >
            {description}
          </Text>
        </View>
      </View>
      {item}
    </View>
  );
};

export default MoreOptions;

const styles = StyleSheet.create({});
