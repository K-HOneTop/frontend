import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { HomeStackParamList } from "../../types/stacks/HomeStackTypes";

export type HomeScreenProps = StackScreenProps<HomeStackParamList, "Home">;

const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>홈 화면</Text>
    </View>
  );
};

export default Home;
