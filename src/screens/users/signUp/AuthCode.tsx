import React, { useState, useEffect } from "react";
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
export type AuthCodeScreenProps = StackScreenProps<
  UsersStackParamList,
  "AuthCode"
>;

const AuthCode = ({ navigation }: AuthCodeScreenProps) => {
  const [authCode, setAuthCode] = useState<string>("");
  const [error, setErrorCode] = useState(false);

  //인증코드 전송 API 연결
  const nextBtnLogin = async () => {
    /*const response = await userServices.AuthCode(authCode);
    console.log(response);
    if (response == 200) {
      navigation.navigate("UserInfo");
    } else {
      setErrorCode(true);
    }*/
    navigation.navigate("UserInfo");
  };

  const [btnDisableState, setbtnDisableState] = useState(true);
  useEffect(() => {
    let btnClickAble = authCode.length;
    if (btnClickAble > 0) setbtnDisableState(false);
    else setbtnDisableState(true);
  }, [authCode]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>
          작성하신 이메일로 발송된{"\n"}인증코드를 입력하세요
        </Text>
        <View style={styles.inputAreaContainer}>
          <TextInput
            selectionColor="black"
            style={
              error ? styles.errorAuthCodeInputBox : styles.authCodeInputBox
            }
            placeholderTextColor="#ADADAD"
            onChangeText={(authCode) => setAuthCode(authCode)}
          />
          {error ? (
            <View style={styles.errorMsgBox}>
              <Text style={styles.errorMsg}>이메일을 정확히 입력해주세요</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          disabled={btnDisableState}
          onPress={nextBtnLogin}
          style={btnDisableState ? styles.nextDisableBtnBox : styles.nextBtnBox}
        >
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthCode;

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
  errorAuthCodeInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    borderColor: "#F56C3B",
    borderWidth: 1,
    fontSize: 17,
    fontWeight: "400",
    marginTop: 16,
    paddingLeft: 16,
  },

  authCodeInputBox: {
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
  errorMsgBox: {
    width: 335,
    height: 25,
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },

  errorMsg: {
    marginTop: 8,
    color: "#F56C3B",
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 3,
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
  nextDisableBtnBox: {
    backgroundColor: "#E9E9E9",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 50,
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
  },
});
