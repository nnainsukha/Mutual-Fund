import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardContent}>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    elevation: 9,
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  CardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
