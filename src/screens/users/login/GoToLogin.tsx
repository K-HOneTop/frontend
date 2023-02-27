import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/UserStackTypes";
//Export type
export type GoToLoginScreenProps = StackScreenProps<
  UsersStackParamList,
  "GoToLogin"
>;

const GoToLogin = ({ navigation }: GoToLoginScreenProps) => {
  return (
    <View>
      <Text>임시 비밀번호 발송 완료</Text>
    </View>
  );
};

export default GoToLogin;
