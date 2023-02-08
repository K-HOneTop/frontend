import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import users screens
import SplashScreen from "./src/screens/users/index";
import AuthCodeScreen from "./src/screens/users/signIn/AuthCode";
import EmailScreen from "./src/screens/users/signIn/Email";
import UserInfoScreen from "./src/screens/users/signIn/UserInfo";
import LoginScreen from "./src/screens/users/login/Login";

//import users types
import { UsersStackParamList } from "./src/types/stacks/StackTypes";

//define user screen stacks
const usersStack = createNativeStackNavigator<UsersStackParamList>();

//편의상 Splash로 표기, stack에 다른 화면 type 지정 필요
const App = () => {
  return (
    <NavigationContainer>
      <usersStack.Navigator initialRouteName="Splash">
        <usersStack.Screen name="Splash" component={SplashScreen} />
        <usersStack.Screen name="AuthCode" component={AuthCodeScreen} />
        <usersStack.Screen name="Email" component={EmailScreen} />
        <usersStack.Screen name="UserInfo" component={UserInfoScreen} />
        <usersStack.Screen name="Login" component={LoginScreen} />
      </usersStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
