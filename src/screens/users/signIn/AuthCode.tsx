import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/StackTypes";

//Export type
export type AuthCodeScreenProps = StackScreenProps<
  UsersStackParamList,
  "AuthCode"
>;

const AuthCode = () => {
  return (
    <View>
      <Text>인증코드</Text>
    </View>
  );
};

export default AuthCode;
