import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useSelector, useDispatch } from "react-redux";

export const loginOutAction = () => {
  return { type: "LOGOUT_USER" };
};

export const loginUserAction = (id) => {
  return { type: "LOGIN_USER", id };
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  dispatch(loginOutAction());

  const loginUser = () => {
    if (!email) {
      setError("Empty Email!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid Email Format!");
      return;
    }
    if (!password) {
      setError("Empty Password!");
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(loginUserAction(user.id));
      setError("");
      navigation.replace("FundsListScreen");
    } else {
      setError("User with email/password not found!");
      return;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/edufund.png")} style={styles.logo} />
      <Text style={styles.text}>Mutual Funds</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Sign In" onPress={() => loginUser()} />
      <Text style={styles.errortext}>{error}</Text>
      <View style={styles.navview}>
        <Text style={styles.navtext}>Don't have an acount?</Text>
        <TouchableOpacity onPress={() => navigation.replace("SignupScreen")}>
          <Text style={styles.navButtonText}> Create here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    borderRadius: 1,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2e64e5",
  },
  navview: {
    flexDirection: "row",
    marginVertical: 10,
  },
  navtext: {
    color: "#444",
    fontSize: 18,
    fontWeight: "500",
  },
  errortext: {
    color: "red",
    fontSize: 16,
    marginTop: 5,
  },
});
