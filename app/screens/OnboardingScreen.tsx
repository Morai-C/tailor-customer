import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/intro_1.jpg"),
    title: "Easily find tailors",
  },
  {
    id: 2,
    image: require("../assets/intro_2.jpg"),
    title: "Best service delivery",
  },
  {
    id: 3,
    image: require("../assets/intro_3.jpg"),
    title: "Affordable and on time",
  },
];

type Props = {};

const Slide = ({ item }: any) => {
  return (
    <ImageBackground style={styles.bgImage} source={item.image}>
      <View style={styles.topItem}>
        <Text style={styles.textHeading}>{item.title}</Text>
        <View style={styles.textBox}>
          <Text style={styles.boxText}>
            Text here about the title above at {"\n"} least 2 lines
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const OnboardingScreen = (props: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = (): JSX.Element => {
    return (
      <View style={styles.bottomItem}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: "rgb(238, 78, 52)",
                  width: 14,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20, marginTop: 15, alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FEF1EF" }]}
          >
            <Text style={styles.text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        bounces={false}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bgImage: {
    resizeMode: "cover",
    width,
    height: height * 0.6,
  },
  topItem: {
    alignItems: "center",
    padding: 50,
    marginTop: 80,
  },
  textHeading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 48,
    color: "#fff",
  },
  textBox: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: "-120%",
    width: 302,
    zIndex: 1000,
  },
  boxText: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 16,
    color: "#ee4e34",
    paddingTop: 19,
    paddingBottom: 33,
    // paddingLeft: 33,
    // paddingRight: 33,
  },
  bottomItem: {
    // padding: 50,
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    zIndex: -1,
    height: height * 0.4,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    //backgroundColor: "red",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "#CCC",
    marginHorizontal: 3,
    borderRadius: 100,
  },
  button: {
    flex: 1,
    padding: 24,
    width: 200,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    color: "#ee4e34",
    fontSize: 16,
  },
});
