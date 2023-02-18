import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import users screens
import SplashScreen from "./src/screens/users/index";
import AuthCodeScreen from "./src/screens/users/signUp/AuthCode";
import EmailScreen from "./src/screens/users/signUp/Email";
import UserInfoScreen from "./src/screens/users/signUp/UserInfo";
import LoginScreen from "./src/screens/users/login/Login";
import WelcomeScreen from "./src/screens/users/signUp/Welcome";

//import home screens
import HomeScreen from "./src/screens/home/index";

//import calendar screens
import MainCalendarScreen from './src/screens/calendar/index';

//import types
import { UsersStackParamList } from "./src/types/stacks/UserStackTypes";
import { HomeStackParamList } from "./src/types/stacks/HomeStackTypes";
import { CalendarStackParamList } from "./src/types/stacks/CalendarStackTypes";

//define screen stacks
const usersStack = createNativeStackNavigator<UsersStackParamList>();
const homeStack = createNativeStackNavigator<HomeStackParamList>();
const calendarStack = createNativeStackNavigator<CalendarStackParamList>();

//편의상 Splash로 표기, stack에 다른 화면 type 지정 필요
const App = () => {
  return (
    <NavigationContainer>
      {/*<usersStack.Navigator initialRouteName="Splash">*/}
      {/*  <usersStack.Group screenOptions={{ headerShadowVisible: false }}>*/}
      {/*    <usersStack.Screen*/}
      {/*      name="Splash"*/}
      {/*      component={SplashScreen}*/}
      {/*      options={{ headerShown: false }}*/}
      {/*    />*/}
      {/*    <usersStack.Screen*/}
      {/*      name="AuthCode"*/}
      {/*      component={AuthCodeScreen}*/}
      {/*      options={{ title: "", headerShown: true }}*/}
      {/*    />*/}
      {/*    <usersStack.Screen*/}
      {/*      name="Email"*/}
      {/*      component={EmailScreen}*/}
      {/*      options={{ title: "", headerShown: true }}*/}
      {/*    />*/}
      {/*    <usersStack.Screen*/}
      {/*      name="UserInfo"*/}
      {/*      component={UserInfoScreen}*/}
      {/*      options={{ title: "", headerShown: true }}*/}
      {/*    />*/}
      {/*    <usersStack.Screen*/}
      {/*      name="Login"*/}
      {/*      component={LoginScreen}*/}
      {/*      options={{ title: "", headerShown: true }}*/}
      {/*    />*/}
      {/*    <usersStack.Screen*/}
      {/*      name="Welcome"*/}
      {/*      component={WelcomeScreen}*/}
      {/*      options={{ headerShown: false }}*/}
      {/*    />*/}
      {/*    <homeStack.Screen*/}
      {/*      name="Home"*/}
      {/*      component={HomeScreen}*/}
      {/*      options={{ headerShown: false }}*/}
      {/*    />*/}
      {/*  </usersStack.Group>*/}
      {/*</usersStack.Navigator>*/}
      <calendarStack.Navigator initialRouteName="Calendar">
        <calendarStack.Group screenOptions={{ headerShadowVisible: false }}>
          <calendarStack.Screen
              name="Calendar"
              component={MainCalendarScreen}
              options={{ headerShown: false }}
          />
        </calendarStack.Group>
      </calendarStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
