import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useSelector, useDispatch } from "react-redux";

export const signUpAction = (user) => {
  return { type: "CREATE_USER", user };
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const signUpUser = () => {
    const user = users.find((u) => u.email === email);
    if (name == "") {
      setError("Name Field Empty!");
      return;
    }
    if (email == "") {
      setError("Email Field Empty!");
      return;
    }
    if (validateEmail(email) == false) {
      setError("Invalid Email!");
      return;
    }
    if (password == "") {
      setError("Password Field Empty!");
      return;
    }

    if (!user) {
      const newUser = { name: name, email: email, password: password };
      dispatch(signUpAction(newUser));
      setError("");
      navigation.replace("LoginScreen");
    } else {
      setError("User with email already exists!");
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

      <Text style={styles.errortext}>{error}</Text>
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
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
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
