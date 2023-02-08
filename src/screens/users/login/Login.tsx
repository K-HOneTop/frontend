import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/StackTypes";

//Export type
export type LoginScreenProps = StackScreenProps<UsersStackParamList, "Login">;

const Login = ({ navigation }: LoginScreenProps) => {
  return (
    <View>
      <Text>로그인화면입니다</Text>
    </View>
  );
};

export default Login;
