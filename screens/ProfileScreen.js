import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LogBox } from "react-native";
import Card from "../components/Card";
import FormButton from "../components/FormButton";
import { windowHeight, windowWidth } from "../utils/Dimensions";

export default function ProfileScreen({ navigation }) {
  const users = useSelector((state) => state.users);
  const loggedInUserId = useSelector((state) => state.loggedInUserId);

  useEffect(() => {
    LogBox.ignoreLogs([
      "Cannot update a component from inside the function body of a different component",
    ]);
  }, []);

  console.log("profile page users ", users);
  console.log("profile page loggedInUser ", loggedInUserId);

  const user = users.find((u) => u.id === loggedInUserId);
  console.log("profile page ", user);

  if (!user) {
    console.log("should return from here");
    navigation.replace("LoginScreen");
    // return <View></View>;
  }

  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log("successful logouy");
    // navigation.replace("LoginScreen");
    // useEffect(() => {
    //   orderbookStore.dispatch(setOrderbookData(formattedData))
    // }, [formattedData])
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };

  let view;
  if (user) {
    view = (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/edufund.png")} style={styles.logo} />
        <Text style={styles.navButtonText}>Name</Text>
        <View>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <Text style={styles.navButtonText} iconType="user">
          Email
        </Text>

        <View>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <FormButton
          style={styles.button}
          buttonTitle="Sign Out"
          onPress={() => logoutUser()}
        />
      </ScrollView>
    );
  } else {
    view = <View></View>;
  }

  return <View style={styles.container}>{view}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  CardContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 3,
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  CardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 16,
    // width: 200,
    // // width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginHorizontal: 120,
    borderRadius: 1,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 10,
    color: "#051d5f",
    marginHorizontal: 16,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#444",
    marginHorizontal: 16,
  },
});
