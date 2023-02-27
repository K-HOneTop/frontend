import React from "react";
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
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.info1}>임시 비밀번호 발송 완료</Text>
        <Text style={styles.info2}>
          이메일로 발송된 임시 비밀번호로 로그인 후
        </Text>
        <Text style={styles.info3}>비밀번호를 변경해 주세요.</Text>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.nextBtnBox}
        >
          <Text style={styles.nextText}>로그인 화면으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoToLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topArea: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  info1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#141414",
    marginBottom: 10,
  },
  info2: {
    color: "#8C8C8C",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 4,
  },
  info3: { color: "#8C8C8C", fontSize: 15, fontWeight: "400" },

  midArea: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  btmArea: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "pink",
  },
  nextBtnBox: {
    backgroundColor: "#F56C3B",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 50,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
});
