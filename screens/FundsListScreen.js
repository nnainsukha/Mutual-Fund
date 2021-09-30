import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import * as data from "../data/FundsData";

export default function FundsListScreen({ navigation }) {
  const getHeader = () => {
    return (
      <View style={styles.profiletext}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={styles.navButtonText}> Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  funds = data.FundsData;
  Images = data.Images;
  Logo = data.Logo;

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
