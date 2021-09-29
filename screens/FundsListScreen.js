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
  ImageStore,
  SafeAreaView,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import CardList from "../components/CardList";
import DetailsScreen from "../screens/DetailsScreen";
import Card from "../components/Card";
// import FundsData from "../data/FundsData";

export default function FundsListScreen({ navigation }) {
  const Images = {
    ratings: {
      1: require("../assets/ratings-1.png"),
      2: require("../assets/ratings-2.png"),
      3: require("../assets/ratings-3.png"),
      4: require("../assets/ratings-4.png"),
      5: require("../assets/ratings-5.png"),
    },
  };
  const Logo = {
    logos: {
      "Axis Bluechip Fund": require("../assets/axis.png"),
      "Kotak Bluechip Fund": require("../assets/kotak.png"),
      "IDFC Largecap Fund": require("../assets/idfc.png"),
      "Baroda Mutual Fund": require("../assets/baroda.png"),
      "IDBI Largecap Fund": require("../assets/idbi.png"),
    },
  };
  // const funds = FundsData;
  const [funds, setfunds] = useState([
    {
      name: "Axis Bluechip Fund",
      category: "Large Cap",
      rating: "5",
      oneyear: "11.5%",
      threeyear: "25.6%",
      fiveyear: "35.6%",
      type: "Equity",
      risk: "Low Risk",
      key: "1",
    },
    {
      name: "Kotak Bluechip Fund",
      category: "Large Cap",
      rating: "4",
      oneyear: "10.5%",
      threeyear: "22.6%",
      fiveyear: "31.6%",
      type: "Liquid",
      risk: "High Risk",
      key: "2",
    },
    {
      name: "IDFC Largecap Fund",
      category: "Mid Cap",
      rating: "4",
      oneyear: "8.5%",
      threeyear: "19.6%",
      fiveyear: "34.6%",
      type: "Debt",
      risk: "Low Risk",
      key: "3",
    },
    {
      name: "Baroda Mutual Fund",
      category: "Small Cap",
      rating: "3",
      oneyear: "9.5%",
      threeyear: "20.6%",
      fiveyear: "37.6%",
      type: "Index",
      risk: "Moderate Risk",
      key: "4",
    },
    {
      name: "IDBI Largecap Fund",
      category: "Large Cap",
      rating: "3",
      oneyear: "9.5%",
      threeyear: "21.6%",
      fiveyear: "33.6%",
      type: "Equity",
      risk: "High Risk",
      key: "5",
    },
  ]);
  // console.log(FundsData);
  const getHeader = () => {
    return (
      <View style={styles.profiletext}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={styles.navButtonText}> Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        nestedScrollEnabled
        data={funds}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate("DetailsScreen", item)}
          >
            <Card>
              <View style={styles.title}>
                <Image
                  style={styles.logoimage}
                  source={Logo.logos[item.name]}
                />
                <View>
                  <Text style={styles.titletext}>{item.name}</Text>
                  <View style={styles.returns}>
                    <Text style={styles.returnstext}>1Y</Text>
                    <Text style={styles.returnstext}>3Y</Text>
                    <Text style={styles.returnstext}>5Y</Text>
                  </View>
                  <View style={styles.returnspercentage}>
                    <Text style={styles.returnstext}>{item.oneyear}</Text>
                    <Text style={styles.returnstext}>{item.threeyear}</Text>
                    <Text style={styles.returnstext}>{item.fiveyear}</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.rating}>
                  <Text style={styles.category}>{item.category}</Text>
                  <Text>Rating: </Text>
                  <Image
                    style={styles.starimage}
                    source={Images.ratings[item.rating]}
                  />
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        ListHeaderComponent={getHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2e64e5",
  },
  profiletext: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  starimage: {
    height: 20,
    width: 100,
    resizeMode: "contain",
  },
  category: {
    marginRight: 20,
    fontWeight: "900",
  },
  title: {
    flexDirection: "row",
  },
  logoimage: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    justifyContent: "flex-start",
    borderRadius: 10,
  },
  titletext: {
    marginHorizontal: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "900",
    flexDirection: "column",
  },
  returns: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 5,
    justifyContent: "space-between",
  },
  returnspercentage: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  returnstext: {
    fontWeight: "900",
    color: "#444",
  },
});
