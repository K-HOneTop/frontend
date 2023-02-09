import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { TextInput } from "react-native-paper"; //비밀번호 눈 아이콘

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/StackTypes";

//Export type
export type LoginScreenProps = StackScreenProps<UsersStackParamList, "Login">;

const Login = ({ navigation }: LoginScreenProps) => {
  const [userEmail, setUserEmail] = useState<String>("");
  const [userPW, setUserPW] = useState<String>("");

  const [pwVisible, setPWVisible] = useState<Boolean>(false); //비밀번호 보이고 안보이게 하기

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>로그인하기</Text>
        <View style={styles.userInputAreaContainer}>
          <TextInput
            style={styles.emailInputBox}
            placeholder="이메일"
            placeholderTextColor="#ADADAD"
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            underlineColor="#F3F3F3"
            activeUnderlineColor="#F3F3F3"
            selectionColor="black"
          />
          <View>
            <TextInput
              style={styles.passwordInputBox}
              secureTextEntry={!pwVisible}
              placeholder="비밀번호"
              placeholderTextColor="#ADADAD"
              onChangeText={(userPW) => setUserPW(userPW)}
              underlineColor="#F3F3F3"
              activeUnderlineColor="#F3F3F3"
              selectionColor="black"
              right={
                <TextInput.Icon
                  icon={pwVisible ? "eye" : "eye-off"}
                  onPress={() => setPWVisible(!pwVisible)}
                />
              }
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPWNotice}>비밀번호를 잊으셨나요?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          //onPress={() => navigation.navigate("AuthCode")} 화면 넣어야 함
          style={styles.loginBtnBox}
        >
          <Text style={styles.loginText}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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

  userInputAreaContainer: {
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
  },

  passwordInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    borderColor: "#F3F3F3",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 8,
  },

  forgotPWNotice: {
    fontSize: 14,
    fontWeight: "400",
    textDecorationLine: "underline",
    marginTop: 8,
    color: "#ADADAD",
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

  loginBtnBox: {
    backgroundColor: "#222222",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 50,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
