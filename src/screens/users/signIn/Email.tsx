import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/StackTypes";

//Export type
export type EmailScreenProps = StackScreenProps<UsersStackParamList, "Email">;

const Email = ({ navigation }: EmailScreenProps) => {
  return (
    <View>
      <Text>Email화면입니다.</Text>
    </View>
  );
};

export default Email;
