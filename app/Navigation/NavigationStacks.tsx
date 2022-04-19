import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../lib/colors";
import ChatScreen from "../screens/Chat/ChatScreen";
import MessageScreen, { HeaderTitle } from "../screens/Chat/MessageScreen";
import AddressbookScreen from "../screens/Home/AddressbookScreen";
import CustomerScreen from "../screens/Home/CustomerScreen";
import DeliveryScreen from "../screens/Home/DeliveryScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import NewAddress from "../screens/Home/NewAddressScreen";
import NotificationScreen from "../screens/Home/NotificationScreen";
import SpecificationScreen from "../screens/Home/SpecificationScreen";
import PurchaseScreen from "../screens/Home/SpecificationScreen";
import TailorScreen from "../screens/Home/TailorScreen";
import AddCardScreen from "../screens/More/AddCardScreen";
import MoreScreen from "../screens/More/MoreScreen";
import PaymentScreen from "../screens/More/PaymentScreen";
import ProfileScreen from "../screens/More/ProfileScreen";
import ItemSummaryScreen from "../screens/Orders/ItemSummaryScreen";
import OrderScreen from "../screens/Orders/OrderScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import {
  ChatStackParamList,
  HomeStackParamList,
  MoreStackParamList,
  OrdersStackParamList,
  SearchStackParamList,
} from "./NavigationStackProps";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();
const OrdersStack = createNativeStackNavigator<OrdersStackParamList>();
const ChatStack = createNativeStackNavigator<ChatStackParamList>();
const MoreStack = createNativeStackNavigator<MoreStackParamList>();

export const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{
        //   headerShown: true,
        //   title: "Hi, Sophia",
        // }}
      />
      <HomeStack.Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{ headerShown: true, title: "", headerShadowVisible: false }}
      />
      <HomeStack.Screen
        name="TailorScreen"
        component={TailorScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="SpecificationScreen"
        component={SpecificationScreen}
        options={{
          headerShown: true,
          title: "Specifications",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
      <HomeStack.Screen
        name="DeliveryScreen"
        component={DeliveryScreen}
        options={{
          headerShown: true,
          title: "Delivery",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
      <HomeStack.Screen
        name="AddressbookScreen"
        component={AddressbookScreen}
        options={{
          headerShown: true,
          title: "Address book",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
      <HomeStack.Screen
        name="NewAddressScreen"
        component={NewAddress}
        options={{
          headerShown: true,
          title: "Add new address",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
      <HomeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export const OrdersStackScreens = () => {
  return (
    <OrdersStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.primaryLight },
      }}
    >
      <OrdersStack.Screen name="OrdersScreen" component={OrderScreen} />
      <OrdersStack.Screen
        name="ItemSummaryScreen"
        component={ItemSummaryScreen}
        options={{
          headerShown: true,
          title: "Item Summary",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
          },
        }}
      />
    </OrdersStack.Navigator>
  );
};

export const ChatStackScreens = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
      <ChatStack.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerTitle: (props) => {
            return <HeaderTitle {...props} />;
          },
        }}
      />
    </ChatStack.Navigator>
  );
};

export const MoreStackScreens = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <MoreStack.Screen name="MoreScreen" component={MoreScreen} />
      <MoreStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
        }}
      />
      <MoreStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerShown: true,
          title: "Payment",
          headerShadowVisible: false,
        }}
      />
      <MoreStack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
        }}
      />
    </MoreStack.Navigator>
  );
};
