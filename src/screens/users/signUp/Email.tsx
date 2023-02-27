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
export type EmailScreenProps = StackScreenProps<UsersStackParamList, "Email">;

const Email = ({ navigation }: EmailScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setErrorCode] = useState(false);
  const [dupEmail, setDupEmail] = useState(false);

  //이메일 전달 API
  const nextBtnClick = async () => {
    setDupEmail(false);
    setErrorCode(false);
    if (email.includes("@") == true) {
      setErrorCode(false);
      const response = await userServices.Email(email);
      if (response == 200) navigation.navigate("AuthCode");
      else setDupEmail(true);
    } else {
      setErrorCode(true);
    }
  };

  //입력창 상태 관리
  const [btnDisableState, setbtnDisableState] = useState(true);
  useEffect(() => {
    let btnClickAble = email.length;
    if (btnClickAble > 0) setbtnDisableState(false);
    else setbtnDisableState(true);
  }, [email]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>이메일을 입력해주세요</Text>
        <View style={styles.inputAreaContainer}>
          <TextInput
            textContentType="emailAddress"
            selectionColor="black"
            style={error ? styles.errorEmailInputBox : styles.emailInputBox}
            placeholder="이메일"
            placeholderTextColor="#ADADAD"
            onChangeText={(email) => setEmail(email)}
          />
          {error ? (
            <View style={styles.noIDMsgBox}>
              <Text style={styles.noIDMsg}>이메일을 정확히 입력해주세요</Text>
            </View>
          ) : null}
          {dupEmail ? (
            <View style={styles.noIDMsgBox}>
              <Text style={styles.noIDMsg}>중복된 이메일입니다</Text>
            </View>
          ) : null}
          <TouchableOpacity>
            <Text style={styles.personalInfoNotice}>
              개인정보 보호 정책 보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          disabled={btnDisableState}
          onPress={nextBtnClick}
          style={btnDisableState ? styles.nextDisableBtnBox : styles.nextBtnBox}
        >
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Email;

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

  personalInfoNotice: {
    fontSize: 13,
    fontWeight: "400",
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
