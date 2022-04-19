import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import { globalStyles } from "../../lib/global";
import InputBox from "../../lib/InputBox";
import NotificationCard from "../../components/HomeComp/NotificationCard";
import colors from "../../lib/colors";
import { FontAwesome, Feather } from "@expo/vector-icons";
import ModalPopup from "../../lib/Modal";

const { width, height } = Dimensions.get("window");

const notificationData = [
  {
    id: 1,
    image: require("../../assets/profile/chat_1.png"),
    title: "Rate Delivery",
    message:
      "Please rate the product delivered to you. \n Rating should be done 3 days after \n delivery",
    timeDelivered: "Wed",
  },
  {
    id: 2,
    image: require("../../assets/profile/chat_2.png"),
    title: "Delivered!",
    message: "Lorem ipsum, or lipsum as it ",
    timeDelivered: "Tue",
  },
  {
    id: 3,
    image: require("../../assets/profile/chat_3.png"),
    title: "New Message",
    message: "psum, or lipsum as it is sometimes",
    timeDelivered: "Mon",
  },
  {
    id: 4,
    image: require("../../assets/profile/chat_4.png"),
    title: "Rate Delivery",
    message: "De olor te estit is sometimes known, is   um",
    timeDelivered: "Mon",
  },
  {
    id: 5,
    image: require("../../assets/profile/chat_3.png"),
    title: "New Message",
    message: "or lipsum as it is sometimes known, is \n dummy text used",
    timeDelivered: "Sat",
  },
  {
    id: 6,
    image: require("../../assets/profile/chat_6.png"),
    title: "Daniel Sonwu",
    message: "Lorem ipsum, or lipsum as it ",
    timeDelivered: "Sun",
  },
  {
    id: 7,
    image: require("../../assets/profile/chat_2.png"),
    title: "Delivered!",
    message: "psum, or lipsum as it is sometimes",
    timeDelivered: "Apr 4, 21",
  },
];

const NotificationScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text style={[globalStyles.textBold, { fontSize: 24 }]}>
          Notification
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/icons/backbutton.png")} />
        </TouchableOpacity>
      ),
    });
  });

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text
        style={[globalStyles.textRegular, { fontSize: 9, marginBottom: 10 }]}
      >
        Chat with your Customers
      </Text>

      <View style={{ marginBottom: 30 }}>
        <InputBox
          placeholderText={"Search message"}
          Styles={{ width: width * 0.9 }}
        />
      </View>

      <View>
        {notificationData.map((item, i) => (
          <View key={item.id}>
            <NotificationCard
              onPress={() => setVisible(true)}
              title={item.title}
              message={item.message}
              timeDelivered={item.timeDelivered}
              source={item.image}
              titleStyle={[
                globalStyles.textSemiBold,
                { fontSize: 13 },
                i === 0
                  ? { color: colors.primaryDark }
                  : { color: colors.grey },
              ]}
              messageStyle={[
                globalStyles.textMedium,
                { fontSize: 10, color: colors.primaryDark },
              ]}
              timeStyle={[globalStyles.textLight, { fontSize: 10 }]}
            />
          </View>
        ))}

        <ModalPopup visible={visible}>
          <View>
            <View style={styles.modalHeader}>
              <Text
                style={[
                  globalStyles.textBold,
                  { fontSize: 25, color: colors.primary },
                ]}
              >
                Ratings
              </Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image source={require("../../assets/icons/close.png")} />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                globalStyles.textRegular,
                { fontSize: 12, color: colors.grey, marginBottom: 14 },
              ]}
            >
              Rate the delivery of this product
            </Text>

            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="star" size={27} color="rgb(221, 221, 221)" />
              <FontAwesome name="star" size={27} color="rgb(221, 221, 221)" />
              <FontAwesome name="star" size={27} color="rgb(221, 221, 221)" />
              <FontAwesome name="star" size={27} color="rgb(221, 221, 221)" />
              <FontAwesome name="star" size={27} color="rgb(221, 221, 221)" />
            </View>

            <View style={{ width: "100%" }}>
              <View style={{ marginBottom: 19 }}>
                <TextInput
                  placeholder="Tell us more..."
                  placeholderTextColor="#9f99a3"
                  multiline
                  textAlignVertical="top"
                  style={{
                    width: "100%",
                    height: 150,
                    backgroundColor: "rgba(235, 235, 235, 0.32)",
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    color: "rgb(51, 51, 51)",
                    marginVertical: 12,
                    fontSize: 13,
                    fontFamily: "Poppins_500Medium",
                  }}
                />
              </View>

              <View
                style={{
                  alignSelf: "flex-end",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={[
                      globalStyles.textBold,
                      {
                        fontSize: 12,
                        marginRight: 16,
                        color: colors.primary,
                        textTransform: "uppercase",
                      },
                    ]}
                  >
                    Submit
                  </Text>
                  <Text
                    style={[
                      globalStyles.textBold,
                      {
                        fontSize: 12,
                        color: colors.grey,
                        textTransform: "uppercase",
                      },
                    ]}
                  >
                    Not Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ModalPopup>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 19,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
