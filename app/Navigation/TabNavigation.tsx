import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../lib/colors";
import HomeScreen from "../screens/Home/HomeScreen";
import { TabStackParamList } from "./NavigationStackProps";
import SearchScreen from "../screens/Search/SearchScreen";
import OrderScreen from "../screens/Orders/OrderScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import MoreScreen from "../screens/More/MoreScreen";

const Tab = createBottomTabNavigator<TabStackParamList>();

type Props = {
  contentStyle?: any;
};

const TabNavigation: React.FC<Props> = ({ contentStyle }: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#EBEBEB",
        tabBarStyle: {
          paddingVertical: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/home_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#EE4E34" : "#EBEBEB",
              }}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/search_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#EE4E34" : "#EBEBEB",
              }}
            />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="OrderTab"
        component={OrderScreen}
        options={{
          headerShown: true,
          title: "My Orders",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/order_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#EE4E34" : "#EBEBEB",
              }}
            />
          ),
          tabBarLabel: "Order",
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/chat_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#EE4E34" : "#EBEBEB",
              }}
            />
          ),
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/more_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#EE4E34" : "#EBEBEB",
              }}
            />
          ),
          tabBarLabel: "More",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
