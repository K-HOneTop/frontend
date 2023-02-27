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
  return <View></View>;
};

export default GoToLogin;
