import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FundsListScreen from "../screens/FundsListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FundsListScreen"
          component={FundsListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#e8e8e8",
            },
            title: "User Profile",
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#e8e8e8",
            },
            title: "Mutual Fund Detail",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
