import React, { useState } from "react";
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

  //회원가입 API 연결
  const signUpBtnClick = async () => {
    if (name === "" || password === "" || nickName === "") {
      Alert.alert("안내", "빈 칸을 모두 입력해주세요.");
    } else {
      const response = await userService.SignUp(name, password, nickName);
      if (response === 200) navigation.navigate("Welcome");
      else Alert.alert("안내", "이미 존재하는 회원입니다.");
    }
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
            secureTextEntry={!pwVisible}
            placeholder="비밀번호"
            placeholderTextColor="#ADADAD"
            onChangeText={(password) => setPassWord(password)}
            underlineColor="white"
            activeUnderlineColor="white"
            selectionColor="black"
            right={
              <TextInput.Icon
                icon={pwVisible ? "eye" : "eye-off"}
                onPress={() => setPWVisible(!pwVisible)}
              />
            }
          />
          <TextInput
            style={styles.nickNameInputBox}
            placeholder="닉네임"
            placeholderTextColor="#ADADAD"
            onChangeText={(nickName) => setNickName(nickName)}
            underlineColor="white"
            activeUnderlineColor="white"
            selectionColor="black"
          />
        </View>
      </View>
      <View style={styles.midArea}></View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          //onPress={() => navigation.navigate("Welcome")}
          onPress={signUpBtnClick}
          style={styles.nextBtnBox}
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

  nickNameInputBox: {
    width: 335,
    height: 52,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    borderColor: "#F3F3F3",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 22,
  },

  personalInfoNotice: {
    fontSize: 14,
    fontWeight: "400",
    textDecorationLine: "underline",
    marginTop: 8,
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
