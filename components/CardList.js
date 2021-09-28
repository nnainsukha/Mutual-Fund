import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const CardList = () => {
  return (
    <View style={styles.CardContainer}>
      <Image source={require("../assets/axis.png")} style={styles.ImageStyle} />
      <View style={styles.TextContainer}>
        <Text style={styles.TitleStyle}>Axis Bluechip Fund</Text>
        <View style={styles.TextStyle}>
          <Text style={styles.SubTextStyle}>1 Year</Text>
          <Text style={styles.SubTextStyle}>3 Years</Text>
          <Text style={styles.SubTextStyle}>5 Years</Text>
        </View>
        <View style={styles.TextStyle}>
          <Text style={styles.PercentageTextStyle}>11.4%</Text>
          <Text style={styles.PercentageTextStyle}>26.3%</Text>
          <Text style={styles.PercentageTextStyle}>30.5%</Text>
        </View>
        <View style={styles.BottomCardStyle}>
          <Text
            style={{
              marginRight: 120,
              fontWeight: "900",
              fontSize: 15,
              color: "#FFFF00",
            }}
          >
            Large Cap
          </Text>
          <Text style={{ marginRight: 5, fontWeight: "900" }}>4</Text>
          <Image
            source={require("../assets/star_filled.png")}
            style={styles.StarStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  CardContainer: {
    marginTop: 30,
    width: windowWidth,
    height: windowHeight / 3,
    backgroundColor: "#4169e1",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    elevation: 9,
    shadowRadius: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "space-between",
  },
  TextContainer: {
    width: windowWidth - windowWidth / 3,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  TextStyle: {
    marginTop: 10,
    flexDirection: "row",
    width: windowWidth - windowWidth / 3,
    // color: "#4B0082",
    color: "#000000",
  },
  SubTextStyle: {
    margin: 10,
    fontSize: 20,
    // color: "#FFA500",
    color: "#000000",
  },
  PercentageTextStyle: {
    marginLeft: 15,
    marginRight: 25,
    fontSize: 15,
    fontWeight: "900",
    color: "#FFFF00",
  },
  ImageStyle: {
    marginLeft: 10,
    height: windowHeight / 5,
    width: windowWidth / 4,
    alignSelf: "center",
    borderRadius: 20,
  },
  TitleStyle: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "flex-start",
    justifyContent: "center",
    borderRadius: 20,
    margin: 10,
    color: "#000000",
  },
  StarStyle: {
    alignSelf: "flex-end",
    height: 20,
    width: 20,
  },
  BottomCardStyle: {
    flexDirection: "row",
    width: windowWidth - windowWidth / 2,
    marginTop: 40,
    marginLeft: 40,
    justifyContent: "flex-end",
  },
});
