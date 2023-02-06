import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../types/stacks/StackTypes";

//Export type
export type SplashScreenProps = StackScreenProps<UsersStackParamList, "Splash">;

//Splash navigation 추가 필요
const Users = () => {
  return (
    <View>
      <Text>이것은 텍스트입니다.</Text>
    </View>
  );
};

export default Users;
