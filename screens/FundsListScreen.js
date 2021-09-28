import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import CardList from "../components/CardList";

const FundsListScreen = ({ navigation }) => {
  const [funds, setfunds] = useState([
    {
      name: "Axis Bluechip Fund",
      category: "Large Cap",
      rating: "5",
      oneyear: "11.5%",
      threeyear: "25.6%",
      fiveyear: "35.6%",
      key: "1",
    },
    {
      name: "Kotak Bluechip Fund",
      category: "Large Cap",
      rating: "4",
      oneyear: "10.5%",
      threeyear: "22.6%",
      fiveyear: "31.6%",
      key: "2",
    },
    {
      name: "IDFC Largecap Fund",
      category: "Large Cap",
      rating: "4",
      oneyear: "8.5%",
      threeyear: "19.6%",
      fiveyear: "34.6%",
      key: "3",
    },
    {
      name: "Baroda Mutual Fund",
      category: "Large Cap",
      rating: "3.5",
      oneyear: "9.5%",
      threeyear: "20.6%",
      fiveyear: "37.6%",
      key: "4",
    },
    {
      name: "IDBI Largecap Fund",
      category: "Large Cap",
      rating: "3",
      oneyear: "9.5%",
      threeyear: "21.6%",
      fiveyear: "33.6%",
      key: "5",
    },
  ]);
  return (
    <FlatList
      data={funds}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen")}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FundsListScreen;
