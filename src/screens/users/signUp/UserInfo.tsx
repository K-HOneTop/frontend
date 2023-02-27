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
export type UserInfoScreenProps = StackScreenProps<
  UsersStackParamList,
  "UserInfo"
>;

const UserInfo = ({ navigation }: UserInfoScreenProps) => {
  const [name, setName] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");

  const [pwVisible, setPWVisible] = useState<Boolean>(false); //비밀번호 보이고 안보이게 하기

  //입력상태 관리
  const [btnDisableState, setbtnDisableState] = useState(true);
  useEffect(() => {
    let btnClickAble = name.length && password.length && nickName.length;
    if (btnClickAble > 0) setbtnDisableState(false);
    else setbtnDisableState(true);
  }, [name, password, nickName]);

  //비밀번호 오류
  const [errorPW, setErrorPW] = useState(false);
  //닉네임 오류
  const [errorNickName, setErrorNickName] = useState(1);

  //비밀번호 상태 확인
  useEffect(() => {
    var regExpEng = /[A-Za-z]/g;
    var regExpNum = /[0-9]/g;

    if (
      password.length < 8 ||
      password.length > 24 ||
      regExpEng.test(password) == false ||
      regExpNum.test(password) == false
    ) {
      setErrorPW(true);
    } else setErrorPW(false);
  }, [password]);

  //닉네임 중복 체크
  const nickNameCheck = async () => {
    const nickNameResponse = await userService.NickNameCheck(nickName);
    if (nickNameResponse == 200) setErrorNickName(0); //올바른 닉네임
    else setErrorNickName(3); //중복된 닉네임
  };

  useEffect(() => {
    nickNameCheck();
  }, [nickName]);

  //회원가입 API 연결
  const signUpBtnClick = async () => {
    const response = await userService.SignUp(name, password, nickName);
    if (response == 200) navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.notice}>정보를 입력하세요</Text>
        <View style={styles.profileAreaContainer}>
          <TextInput
            style={styles.nameInputBox}
            placeholder="이름"
            placeholderTextColor="#ADADAD"
            onChangeText={(name) => setName(name)}
            underlineColor="white"
            activeUnderlineColor="white"
            selectionColor="black"
          />
          <TextInput
            style={styles.passwordInputBox}
            mode="outlined"
            outlineColor={errorPW ? "#F56C3B" : "white"}
            activeOutlineColor="white"
            secureTextEntry={!pwVisible}
            placeholder="비밀번호(숫자, 영문 포함 8~24글자)"
            placeholderTextColor="#ADADAD"
            onChangeText={(password) => setPassWord(password)}
            selectionColor="black"
            right={
              <TextInput.Icon
                icon={pwVisible ? "eye" : "eye-off"}
                onPress={() => setPWVisible(!pwVisible)}
              />
            }
          />
          {errorPW ? (
            <View style={styles.pwErrorMsgBox}>
              <Text style={styles.pwErrorMsg}>
                영문,숫자 포함 8자 이상 입력해주세요
              </Text>
            </View>
          ) : (
            <View style={styles.pwErrorMsgBox}></View>
          )}
          <TextInput
            style={styles.nickNameInputBox}
            placeholder="닉네임"
            placeholderTextColor="#ADADAD"
            onChangeText={(nickName) => setNickName(nickName)}
            underlineColor="white"
            activeUnderlineColor="white"
            selectionColor="black"
          />
          {errorNickName == 3 ? (
            <View style={styles.errorNickNameBox}>
              <Text style={styles.errorNickName}>중복된 닉네임입니다</Text>
            </View>
          ) : null}
          {errorNickName == 0 ? (
            <View style={styles.nickNameGoodMsgBox}>
              <Text style={styles.nickNameGoodMsg}>
                사용 가능한 닉네임 입니다.
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          onPress={signUpBtnClick}
          style={btnDisableState ? styles.nextDisableBtnBox : styles.nextBtnBox}
        >
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo;

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

  profileAreaContainer: {
    alignItems: "center",
  },

  nameInputBox: {
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
  pwErrorMsgBox: {
    width: 335,
    height: 25,
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },
  pwErrorMsg: {
    marginTop: 8,
    color: "#F56C3B",
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 3,
  },

  nickNameInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    borderColor: "#F3F3F3",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 24,
  },

  errorNickNameBox: {
    width: 335,
    height: 25,
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },
  errorNickName: {
    marginTop: 8,
    color: "#F56C3B",
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 3,
  },
  nickNameGoodMsgBox: {
    width: 335,
    height: 25,
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },
  nickNameGoodMsg: {
    marginTop: 8,
    color: "#8C8C8C",
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
