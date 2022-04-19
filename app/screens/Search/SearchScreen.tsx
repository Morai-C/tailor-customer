import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../lib/colors";
import { globalStyles } from "../../lib/global";
import InputBox from "../../lib/InputBox";
import Tags from "../../components/SearchComp/Tags";
import { FontAwesome5 } from "@expo/vector-icons";
import { BtnLg } from "../../lib/ButtonComp";
import { Checkbox } from "react-native-paper";
import SearchCards from "../../components/SearchComp/SearchCards";
import FilterComp from "../../components/SearchComp/FilterComp";

const { width } = Dimensions.get("window");

const SearchScreen = (): JSX.Element => {
  const [filter, setFilter] = useState<boolean>(false);

  const getHeader = (): JSX.Element => {
    return (
      <View style={{ backgroundColor: colors.primaryLight }}>
        <Text style={[globalStyles.textBold, { fontSize: 24 }]}>Search</Text>
        <Text style={[globalStyles.textRegular, { fontSize: 9 }]}>
          Easily search for anything!
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputBox
            placeholderText="Tailors, styles or categories"
            Styles={{
              width: width * 0.7,
              backgroundColor: "rgba(235, 235, 235, 0.32)",
              height: 50,
              borderRadius: 11,
              paddingHorizontal: 16,
              marginVertical: 14,
            }}
            style={{ color: "rgb(51, 51, 51)", fontSize: 16 }}
          />

          <TouchableOpacity
            onPress={() => setFilter((prevFilter) => !prevFilter)}
          >
            {filter === true ? (
              <Image source={require("../../assets/icons/close_filter.png")} />
            ) : (
              <Image source={require("../../assets/icons/sort_1.png")} />
            )}
          </TouchableOpacity>
        </View>

        {filter === !true ? (
          <View style={{ marginBottom: 10 }}>
            <Tags />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 34,
              marginBottom: 11,
            }}
          >
            <Text style={[globalStyles.textRegular, { fontSize: 12 }]}>
              LOCATION
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  globalStyles.textRegular,
                  { fontSize: 12, color: colors.primary, marginRight: 6 },
                ]}
              >
                ALL
              </Text>
              <FontAwesome5 name="chevron-down" size={18} color="tomato" />
            </View>
          </View>
        )}
      </View>
    );
  };

  const getFooter = (): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);

    return (
      <View>
        {filter === !true ? (
          <View style={{ marginTop: 47, marginBottom: 15 }}>
            <BtnLg
              text="Load More Styles"
              backgroundColor="rgba(238, 78, 52, 0.08)"
              customStyle={{
                paddingHorizontal: 41,
                paddingVertical: 14,
                borderRadius: 35,
                width: width * 0.85,
              }}
              textStyle={{ color: "rgb(238, 78, 52)" }}
            />
          </View>
        ) : (
          <View style={{ marginTop: 40 }}>
            <View>
              <Text
                style={[
                  globalStyles.textRegular,
                  { fontSize: 12, marginBottom: 7, textTransform: "uppercase" },
                ]}
              >
                Availability for work
              </Text>

              <View
                style={{
                  height: 50,
                  borderRadius: 7,
                  backgroundColor: "#f7f8f7",
                  width: width * 0.9,
                  marginBottom: 32,
                }}
              >
                <Checkbox.Item
                  label="Only show tailors available for work"
                  labelStyle={[globalStyles.textRegular, { fontSize: 11 }]}
                  status={checked ? "checked" : "unchecked"}
                  color="tomato"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  style={{ backgroundColor: colors.grey }}
                />
              </View>
            </View>

            <View>
              <Text
                style={[
                  globalStyles.textRegular,
                  { fontSize: 12, marginBottom: 7, textTransform: "uppercase" },
                ]}
              >
                Payment method
              </Text>

              <View
                style={{
                  height: 50,
                  borderRadius: 7,
                  backgroundColor: "#f7f8f7",
                  width: width * 0.9,
                  marginBottom: 10,
                }}
              >
                <Checkbox.Item
                  label="Pay on delivery"
                  labelStyle={[globalStyles.textRegular, { fontSize: 11 }]}
                  status={checkedB ? "checked" : "unchecked"}
                  color="tomato"
                  onPress={() => {
                    setCheckedB(!checkedB);
                  }}
                  style={{ backgroundColor: colors.grey }}
                />
              </View>

              <View
                style={{
                  height: 50,
                  borderRadius: 7,
                  backgroundColor: colors.grey,
                  width: width * 0.9,
                }}
              >
                <Checkbox.Item
                  label="Pay before delivery"
                  labelStyle={[globalStyles.textRegular, { fontSize: 11 }]}
                  status={checkedC ? "checked" : "unchecked"}
                  color="tomato"
                  onPress={() => {
                    setCheckedC(!checkedC);
                  }}
                  style={{ backgroundColor: colors.grey }}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {filter === !true ? (
        <SearchCards
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
        />
      ) : (
        <FilterComp
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    paddingTop: 60,
    paddingHorizontal: 25,
  },
});
