import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListScreen from "./screens/ListScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import FundsListScreen from "./screens/FundsListScreen";
import Navigator from "./routes/HomeStack";
import Charts from "./components/Charts";
import Table from "./components/Table";

export default function App() {
  return (
    // <LoginScreen />
    // <SignupScreen />
    // <ListScreen />
    // <Navigator />
    // <FundsListScreen />
    <Table />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
