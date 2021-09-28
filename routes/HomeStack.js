import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ListScreen from "../screens/ListScreen";
import FundsListScreen from "../screens/FundsListScreen";
import DetailsScreen from "../screens/DetailsScreen";

const screens = {
  LoginScreen: {
    screen: LoginScreen,
  },
  SignupScreen: {
    screen: SignupScreen,
  },
  ListScreen: {
    screen: ListScreen,
  },
  FundsListScreen: {
    screen: FundsListScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
