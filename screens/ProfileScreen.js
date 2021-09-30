import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LogBox } from "react-native";
import FormButton from "../components/FormButton";
import { windowHeight } from "../utils/Dimensions";

export default function ProfileScreen({ navigation }) {
  const users = useSelector((state) => state.users);
  const loggedInUserId = useSelector((state) => state.loggedInUserId);

  useEffect(() => {
    LogBox.ignoreLogs([
      "Cannot update a component from inside the function body of a different component",
    ]);
  }, []);

  const user = users.find((u) => u.id === loggedInUserId);

  if (!user) {
    navigation.replace("LoginScreen");
  }

  // const dispatch = useDispatch();

  const logoutUser = () => {
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
  },

  button: {
    marginTop: 20,
    marginHorizontal: 16,
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
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
