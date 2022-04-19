import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../lib/global";
import colors from "../../lib/colors";
import InputBox from "../../lib/InputBox";
import DropDownPicker from "react-native-dropdown-picker";
import { BtnLg, SwitchBtn } from "../../lib/ButtonComp";

const { width, height } = Dimensions.get("window");

const PersonalComp = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>();
  const [items, setItems] = useState<{ label: string; value: string }[]>([
    { label: "Rivers State", value: "Rivers State" },
  ]);

  const [open1, setOpen1] = useState<boolean>(false);
  const [value1, setValue1] = useState<any>(null);
  const [items1, setItems1] = useState<{ label: string; value: string }[]>([
    { label: "Port Harcourt", value: "Port Harcourt" },
  ]);

  const [open2, setOpen2] = useState<boolean>(false);
  const [value2, setValue2] = useState<any>(null);
  const [items2, setItems2] = useState<{ label: string; value: string }[]>([
    { label: "Asalga", value: "Asalga" },
    { label: "Phalga", value: "Phalga" },
  ]);
  return (
    <View style={{ marginBottom: 130 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("../../assets/avatar_lg.png")}
            style={{ marginBottom: 17 }}
          />
          <Text
            style={[
              globalStyles.textMedium,
              { fontSize: 10, color: colors.grey, marginBottom: 28 },
            ]}
          >
            Tap to change Picture
          </Text>
        </View>

        <View style={{ marginBottom: 22 }}>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>NAME</Text>
          <InputBox
            placeholderText="Sofia Johnson"
            Styles={{ width: width * 0.85 }}
          />
        </View>

        <View style={{ marginBottom: 22 }}>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>EMAIL</Text>
          <InputBox placeholderText="charisbraide@gmail.com" />
        </View>

        <View style={{ marginBottom: 22 }}>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>
            PHONE NUMBER
          </Text>
          <InputBox placeholderText="0806 959 9147" keyboardType="phone-pad" />
        </View>

        <View>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>STATE</Text>
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
              backgroundColor: colors.primaryLight,
              borderWidth: 1,
              width: width * 0.85,
            }}
            selectedItemLabelStyle={{
              backgroundColor: "blue",
              color: colors.primaryLight,
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>

        <View>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>
            SELECT CITY
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            items={items1}
            setItems={setItems1}
            value={value1}
            setValue={setValue1}
            open={open1}
            setOpen={setOpen1}
            placeholder="Select City"
            zIndex={8000}
            showTickIcon={false}
            containerStyle={{
              height: 60,
              marginBottom: 22,
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
              backgroundColor: colors.primaryLight,
              borderWidth: 1,
              width: width * 0.85,
            }}
            selectedItemLabelStyle={{
              backgroundColor: "blue",
              color: colors.primaryLight,
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>

        <View>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>LGA</Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            items={items2}
            setItems={setItems2}
            value={value2}
            setValue={setValue2}
            open={open2}
            setOpen={setOpen2}
            placeholder="Select LGA"
            zIndex={10000}
            showTickIcon={false}
            containerStyle={{
              height: 60,
              marginBottom: 22,
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
              backgroundColor: colors.primaryLight,
              borderWidth: 1,
              width: width * 0.85,
              zIndex: 9000,
            }}
            selectedItemLabelStyle={{
              backgroundColor: "blue",
              color: colors.primaryLight,
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>

        <View>
          <Text style={[globalStyles.textMedium, { fontSize: 12 }]}>
            ACCOUNT VISIBILITY
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <Text
              style={[
                globalStyles.textRegular,
                { fontSize: 14, color: colors.grey, marginTop: 15 },
              ]}
            >
              If toggle off, users can't discover {"\n"} your brand to send you
              offers
            </Text>
            <SwitchBtn />
          </View>
        </View>

        <BtnLg
          text="SAVE CHANGES"
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
        />
      </ScrollView>
    </View>
  );
};

export default PersonalComp;

const styles = StyleSheet.create({});
