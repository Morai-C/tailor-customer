import { NavigatorScreenParams } from "@react-navigation/native";
import { RootStackParamList } from "../_app";

export type HomeStackParamList = {
  Home: { screen: string };
  HomeScreen: undefined;
  CustomerScreen: undefined;
  TailorScreen: undefined;
  SpecificationScreen: undefined;
  DeliveryScreen: undefined;
  AddressbookScreen: undefined;
  NewAddressScreen: undefined;
  NotificationScreen: undefined;
};

export type SearchStackParamList = {
  SearchScreen: undefined;
};

export type OrdersStackParamList = {
  OrdersScreen: undefined;
  Orders: { screen: string };
  ItemSummaryScreen: undefined;
};

export type ChatStackParamList = {
  Chat: { screen: string };
  ChatScreen: undefined;
  Messages: undefined;
};

export type MoreStackParamList = {
  MoreScreen: undefined;
  More: { screen: string };
  ProfileScreen: undefined;
  PaymentScreen: undefined;
  AddCardScreen: undefined;
};

export type TabStackParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SearchTab: undefined;
  OrderTab: undefined;
  ChatTab: undefined;
  MoreTab: undefined;
};
