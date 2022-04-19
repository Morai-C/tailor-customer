import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/NavigationStackProps";
import InputBox from "../../lib/InputBox";
import DropDownPicker from "react-native-dropdown-picker";
import { Checkbox } from "react-native-paper";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import { BtnLg } from "../../lib/ButtonComp";

const { width, height } = Dimensions.get("window");

const NewAddress = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamList>) => {
  const [checked, setChecked] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>();
  const [items, setItems] = useState<{ label: string; value: string }[]>([
    { label: "State", value: "State" },
  ]);

  const [open1, setOpen1] = useState<boolean>(false);
  const [value1, setValue1] = useState<any>();
  const [items1, setItems1] = useState<{ label: string; value: string }[]>([
    { label: "City", value: "City" },
  ]);

  const [open2, setOpen2] = useState<boolean>(false);
  const [value2, setValue2] = useState<any>();
  const [items2, setItems2] = useState<{ label: string; value: number }[]>([
    { label: "+234", value: +234 },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            marginRight: 11,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <InputBox
          placeholderText={"First name"}
          Styles={{ marginBottom: 22 }}
        />
        <InputBox placeholderText={"Last name"} Styles={{ marginBottom: 22 }} />
        <InputBox placeholderText={"Address"} Styles={{ marginBottom: 22 }} />

        <DropDownPicker
          listMode="SCROLLVIEW"
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
          open={open}
          setOpen={setOpen}
          placeholder="State"
          zIndex={8000}
          showTickIcon={false}
          containerStyle={{
            height: 60,
            marginBottom: 22,
            alignItems: "center",
          }}
          style={{
            backgroundColor: "rgba(235, 235, 235, 0.32)",
            borderWidth: 0,
            width: width * 0.85,
          }}
          placeholderStyle={{
            color: "#9f99a3",
            fontSize: 16,
          }}
          labelStyle={{
            color: "#9f99a3",
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
          dropDownContainerStyle={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#fff",
            borderWidth: 1,
            width: width * 0.85,
          }}
          selectedItemLabelStyle={{
            backgroundColor: "blue",
            color: "#fff",
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
        />

        <DropDownPicker
          listMode="SCROLLVIEW"
          items={items1}
          setItems={setItems1}
          value={value1}
          setValue={setValue1}
          open={open1}
          setOpen={setOpen1}
          placeholder="City"
          showTickIcon={false}
          containerStyle={{
            height: 60,
            marginBottom: 22,
            alignItems: "center",
          }}
          style={{
            backgroundColor: "rgba(235, 235, 235, 0.32)",
            borderWidth: 0,
            width: width * 0.85,
          }}
          placeholderStyle={{
            color: "#9f99a3",
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
          labelStyle={{
            color: "#9f99a3",
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
          dropDownContainerStyle={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          selectedItemLabelStyle={{
            backgroundColor: "blue",
            color: "#fff",
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.85,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <DropDownPicker
              listMode="SCROLLVIEW"
              items={items2}
              setItems={setItems2}
              value={value2}
              setValue={setValue2}
              open={open2}
              setOpen={setOpen2}
              placeholder="+234"
              showTickIcon={false}
              containerStyle={{
                //height: 60,
                //marginBottom: 22,
                marginTop: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
              style={{
                backgroundColor: "rgba(235, 235, 235, 0.32)",
                borderWidth: 0,
                width: width * 0.23,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              placeholderStyle={{
                color: "#9f99a3",
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
              }}
              labelStyle={{
                color: "#9f99a3",
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
              }}
            />
          </View>
          <InputBox
            Styles={{
              width: width * 0.6,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            placeholderText={"Phone number"}
          />
        </View>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 43 }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          color={colors.primary}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={[globalStyles.textRegular, { fontSize: 14 }]}>
          Set as default
        </Text>
      </View>

      <BtnLg
        text={"Save"}
        backgroundColor={colors.primary}
        customStyle={{
          marginBottom: 20,
          width: width * 0.9,
          height: 51,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        textStyle={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
});
