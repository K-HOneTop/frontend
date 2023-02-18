import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { BookmarkStackParamList } from "../../types/stacks/BookmarkStackTypes";

export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "Main">;

const Home = ({ navigation }: BookmarkScreenProps) => {
    return (
        <View>
            <Text>북마크 화면</Text>
        </View>
    );
};

export default Home;
