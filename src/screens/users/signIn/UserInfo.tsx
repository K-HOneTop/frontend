import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/StackTypes";

//Export type
export type UserInfoScreenProps = StackScreenProps<
  UsersStackParamList,
  "UserInfo"
>;

const UserInfo = ({ navigation }: UserInfoScreenProps) => {
  return (
    <View>
      <Text>유저정보 입력화면입니다.</Text>
    </View>
  );
};

export default UserInfo;
