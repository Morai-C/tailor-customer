import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import React from "react";
import { BtnLg } from "./lib/ButtonComp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import LandingScreen from "./screens/LandingScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import VerificationScreen from "./screens/Auth/VerificationScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import SearchScreen from "./screens/Search/SearchScreen";
import OrderScreen from "./screens/Orders/OrderScreen";
import {
  ChatStackScreens,
  HomeStackScreens,
  MoreStackScreens,
  OrdersStackScreens,
  SearchStackScreens,
} from "./Navigation/NavigationStacks";
import TabNavigation from "./Navigation/TabNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export type RootStackParamList = {
  Landing: undefined;
  Register: undefined;
  Login: undefined;
  Verify: undefined;
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  Chat: undefined;
  More: undefined;
  Tabs: undefined;
  CustomerScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        >
          {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        /> */}
          {/* <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        /> */}
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: true,
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: true,
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Verify"
            component={VerificationScreen}
            options={{
              headerShown: true,
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen name="Tabs" component={TabNavigation} />
          <Stack.Screen
            name="Home"
            component={HomeStackScreens}
            options={{
              headerShown: false,
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchStackScreens}
            options={{
              headerShown: true,
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Orders"
            component={OrdersStackScreens}
            options={{
              headerShown: false,
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatStackScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={MoreStackScreens}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
