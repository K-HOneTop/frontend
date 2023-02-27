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

import userServices from "../../../services/userServices";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/UserStackTypes";

//Export type
export type FindPWScreenProps = StackScreenProps<UsersStackParamList, "FindPW">;

const FindPW = ({ navigation }: FindPWScreenProps) => {
  const [email, setEmail] = useState<string>("");

  //인증코드 전송 API 연결
  const nextBtnLogin = async () => {
    if (email === "") {
      Alert.alert("안내", "인증코드를 입력하세요.");
    } else {
      const response = await userServices.FindPassWord(email);
      console.log(response);
      if (response == 200) {
        navigation.navigate("Login");
      } else Alert.alert("안내", "인증번호를 다시 입력하세요.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>비밀번호를 잊으셨나요?</Text>
        <View style={styles.inputAreaContainer}>
          <TextInput
            selectionColor="black"
            placeholder="이메일"
            style={styles.emailInputBox}
            placeholderTextColor="#ADADAD"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity onPress={nextBtnLogin} style={styles.nextBtnBox}>
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindPW;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  topArea: {
    flex: 0.5,
    //backgroundColor: "green",
  },

  notice: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "5%",
    marginLeft: 15,
    color: "#222222",
  },

  inputAreaContainer: {
    alignItems: "center",
  },

  emailInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    borderColor: "#F3F3F3",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 16,
    paddingLeft: 16,
  },

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
    backgroundColor: "#222222",
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
  },
});
