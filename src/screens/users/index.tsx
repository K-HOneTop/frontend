import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../types/stacks/UserStackTypes";

//Export type
export type SplashScreenProps = StackScreenProps<UsersStackParamList, "Splash">;

const Users = ({ navigation }: SplashScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        {/*<View style={styles.logoArea}></View>*/}
        {/* 로고 자리 */}
      </View>
      <View style={styles.midArea}>
        <View style={styles.intro}>
          <View style={styles.welcomeIntro}>
            <Text style={styles.welcomeIntroOne}>취뽀의 자격을 </Text>
            <Text style={styles.welcomeIntroTwo}>시작해보세요</Text>
          </View>
          <Text style={styles.introTwo}>막막하고 복잡한 취업 준비,</Text>
          <Text style={styles.introTwo}>
            자격증은 취뽀의 자격이 도와드릴게요
          </Text>
        </View>
      </View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.logInBtnBox}
        >
          <Text style={styles.logInText}>이메일로 로그인하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Email")}
          style={styles.signInBtnBox}
        >
          <Text style={styles.signInText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  topArea: {
    flex: 0.5,
    alignItems: "center",
    //backgroundColor: "green",
  },

  logoArea: {
    marginTop: 90,
    flex: 0.3,
    width: 200,
    height: 56,
    backgroundColor: "#D9D9D9",
  },

  midArea: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "blue",
  },

  intro: {
    alignItems: "center",
  },
  welcomeIntro: {
    flexDirection: "row",
    marginBottom: 15,
  },
  welcomeIntroOne: {
    color: "#F56C3B",
    fontWeight: "600",
    fontSize: 20,
  },
  welcomeIntroTwo: {
    fontSize: 20,
    color: "#222222",
    fontWeight: "600",
  },

  introTwo: {
    fontSize: 18,
    fontWeight: "400",
    color: "#8C8C8C",
  },

  btmArea: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink",
  },
  logInBtnBox: {
    backgroundColor: "#F56C3B",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 8,
  },

  logInText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },

  signInBtnBox: {
    backgroundColor: "#FEF0EB",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  signInText: {
    color: "#F56C3B",
    fontSize: 16,
    fontWeight: "500",
  },
});
