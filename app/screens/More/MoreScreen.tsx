import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../lib/global";
import MoreOptions from "../../components/MoreComp/MoreOptions";
import { Feather } from "@expo/vector-icons";
import { SwitchBtn } from "../../lib/ButtonComp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MoreStackParamList } from "../../Navigation/NavigationStackProps";

const MoreScreen = ({
  navigation,
}: NativeStackScreenProps<MoreStackParamList>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginBottom: 26 }}>
          <Image
            source={require("../../assets/profile/profile_image.png")}
            style={{ marginBottom: 14 }}
          />
          <Text
            style={[globalStyles.textBold, { fontSize: 20, marginBottom: 8 }]}
          >
            Sophia Johnson
          </Text>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("More", { screen: "ProfileScreen" })
            }
          >
            <Text style={{ fontSize: 10, color: "rgb(238, 78,52)" }}>
              View Profile
            </Text>
          </Pressable>
        </View>

        <View>
          <MoreOptions
            title="My Orders"
            description={"View and mange all your orders in one \n place"}
            source={require("../../assets/icons/order_cart.png")}
            item={<Feather name="chevron-right" size={20} color="black" />}
          />
          <MoreOptions
            title="Payment"
            description={
              "Add and remove payment methods, view \n payment history"
            }
            source={require("../../assets/icons/wallet_icon.png")}
            item={
              <Pressable
                onPress={() =>
                  navigation.navigate("More", { screen: "PaymentScreen" })
                }
              >
                <Feather name="chevron-right" size={20} color="black" />
              </Pressable>
            }
          />
          <MoreOptions
            title="Data Saver"
            description={
              "Lorem ipsum, or lipsum as it is some times \n known, is dummy text used"
            }
            source={require("../../assets/icons/dataSaver.png")}
            item={<SwitchBtn />}
          />
          <MoreOptions
            title="Change Theme"
            description={"Choose between a dark or light theme"}
            source={require("../../assets/icons/change_theme.png")}
            item={<SwitchBtn />}
          />
          <MoreOptions
            title="Guide"
            description={
              "Lorem ipsum, or lipsum as it is some times known, is \n dummy text used"
            }
            source={require("../../assets/icons/guide.png")}
          />
          <MoreOptions
            title="Logout"
            description=""
            source={require("../../assets/icons/logout.png")}
            color="#d60032"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  button: {
    padding: 14,
    alignItems: "center",
    backgroundColor: "rgba(238, 78, 52, 0.08)",
    borderRadius: 42,
  },
});
