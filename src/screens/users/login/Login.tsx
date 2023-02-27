import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//비밀번호 눈 아이콘 이슈로 새로 추가함
import { TextInput } from "react-native-paper";

//userService 임포트
import userService from "../../../services/userServices";

//Users Stack
import { UsersStackParamList } from "../../../types/stacks/UserStackTypes";

//Export type
export type LoginScreenProps = StackScreenProps<UsersStackParamList, "Login">;

const Login = ({ navigation }: LoginScreenProps) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPW, setUserPW] = useState<string>("");

  const [pwVisible, setPWVisible] = useState<Boolean>(false); //비밀번호 보이고 안보이게 하기
  const [errorLogin, setErrorLogin] = useState(true); //로그인 정보 틀렸을 때

  //로그인 API 연결
  const loginBtnClick = async () => {
    /*const response = await userService.SignIn(userEmail, userPW);
    console.log(response);
    if (response == 200) navigation.navigate("Home");
    else setErrorLogin(true);*/
    navigation.navigate("Home");
  };

  //입력창 상태 관리
  const [btnDisableState, setbtnDisableState] = useState(true);
  useEffect(() => {
    let btnClickAble = userEmail.length && userPW.length;
    if (btnClickAble > 0)
      setbtnDisableState(false); //둘다 길이 1이상이어야만 disable 해제
    else setbtnDisableState(true);
  }, [userEmail, userPW]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>로그인하기</Text>
        <View style={styles.userInputAreaContainer}>
          <TextInput
            mode="outlined"
            style={styles.emailInputBox}
            outlineColor={errorLogin ? "#F56C3B" : "white"}
            selectionColor="black"
            activeOutlineColor="white"
            placeholder="이메일"
            placeholderTextColor="#ADADAD"
            onChangeText={(userEmail) => setUserEmail(userEmail)}
          />
          <View>
            <TextInput
              style={styles.passwordInputBox}
              mode="outlined"
              outlineColor={errorLogin ? "#F56C3B" : "white"}
              activeOutlineColor="white"
              selectionColor="black"
              secureTextEntry={!pwVisible}
              placeholder="비밀번호"
              placeholderTextColor="#ADADAD"
              onChangeText={(userPW) => setUserPW(userPW)}
              right={
                <TextInput.Icon
                  icon={pwVisible ? "eye" : "eye-off"}
                  onPress={() => setPWVisible(!pwVisible)}
                />
              }
            />
          </View>

          {errorLogin ? (
            <View style={styles.noIDMsgBox}>
              <Text style={styles.noIDMsg}>일치하는 정보가 없습니다</Text>
            </View>
          ) : null}
          <View style={styles.forgetPWArea}>
            <TouchableOpacity onPress={() => navigation.navigate("FindPW")}>
              <Text style={styles.forgotPWNotice}>비밀번호를 잊으셨나요?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          style={
            btnDisableState ? styles.loginDisableBtnBox : styles.loginBtnBox
          }
          onPress={loginBtnClick}
          disabled={btnDisableState}
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
    //backgroundColor: "blue",
    height: 150,
  },

  emailInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 16,
    justifyContent: "center",
  },

  passwordInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 8,
    justifyContent: "center",
  },

  noIDMsgBox: {
    width: 335,
    height: 25,
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },

  noIDMsg: {
    marginTop: 8,
    color: "#F56C3B",
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 3,
  },

  forgetPWArea: {
    alignItems: "center",
  },

  forgotPWNotice: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 8,
    color: "#8C8C8C",
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
  loginDisableBtnBox: {
    backgroundColor: "#E9E9E9",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 50,
  },

  loginBtnBox: {
    backgroundColor: "#F56C3B",
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
    fontWeight: "400",
  },
});
