import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useSelector, useDispatch } from "react-redux";

export const signUpAction = (user) => {
  return { type: "CREATE_USER", user };
};

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const signUpUser = () => {
    console.log("signup called");
    const user = users.find((u) => u.email === email);
    if (!user) {
      console.log("successful signuped");
      const newUser = { name: name, email: email, password: password };
      dispatch(signUpAction(newUser));
      navigation.replace("LoginScreen");
    } else {
      console.log("User with email already exists.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={name}
        onChangeText={(name) => setName(name)}
        placeholderText="Full Name"
        iconType="user"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

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

      <FormButton buttonTitle="Sign Up" onPress={() => signUpUser()} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>
      <View style={styles.navview}>
        <Text style={styles.navtext}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.navButtonText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey",
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
});
