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
export type FindPWScreenProps = StackScreenProps<UsersStackParamList, "FindPW">;

const FindPW = ({ navigation }: FindPWScreenProps) => {
  const [email, setEmail] = useState<string>("");

  //입력창 상태 관리
  const [btnDisableState, setbtnDisableState] = useState(true);
  useEffect(() => {
    let btnClickAble = email.length;
    if (btnClickAble > 0) setbtnDisableState(false);
    else setbtnDisableState(true);
  }, [email]);

  //인증코드 전송 API 연결
  const [errorCode, setErrorCode] = useState(false);
  const nextBtnLogin = async () => {
    const response = await userServices.FindPassWord(email);
    console.log(response);
    if (response == 200) {
      navigation.navigate("GoToLogin");
    } else setErrorCode(true);
    //navigation.navigate("GoToLogin");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>비밀번호를 잊으셨나요?</Text>
        <View style={styles.inputAreaContainer}>
          <TextInput
            selectionColor="black"
            placeholder="이메일"
            style={errorCode ? styles.errorEmailInputBox : styles.emailInputBox}
            placeholderTextColor="#ADADAD"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {errorCode ? (
          <View style={styles.noEmailBox}>
            <Text style={styles.noEmailMsg}>일치하는 이메일이 없습니다</Text>
          </View>
        ) : null}
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

  errorEmailInputBox: {
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

  noEmailBox: {
    alignItems: "flex-start",
    paddingLeft: 16,
  },

  noEmailMsg: {
    marginTop: 8,
    color: "#F56C3B",
    fontSize: 12,
    fontWeight: "400",
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
    fontWeight: "400",
  },
});
