import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import users screens
import SplashScreen from "./src/screens/users/index";

//import users types
import { UsersStackParamList } from "./src/types/stacks/StackTypes";

//define user screen stacks
const usersStack = createNativeStackNavigator<UsersStackParamList>();

//편의상 Splash로 표기, stack에 다른 화면 type 지정 필요
const App = () => {
  return <SplashScreen></SplashScreen>;
};

export default App;
