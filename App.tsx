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
        <usersStack.Group screenOptions={{ headerShadowVisible: false }}>
          <usersStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <usersStack.Screen
            name="AuthCode"
            component={AuthCodeScreen}
            options={{ title: "", headerShown: true }}
          />
          <usersStack.Screen
            name="Email"
            component={EmailScreen}
            options={{ title: "", headerShown: true }}
          />
          <usersStack.Screen
            name="UserInfo"
            component={UserInfoScreen}
            options={{ title: "", headerShown: true }}
          />
          <usersStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "", headerShown: true }}
          />
        </usersStack.Group>
      </usersStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
