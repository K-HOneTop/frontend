import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../types/stacks/StackTypes";

//Export type
export type SplashScreenProps = StackScreenProps<UsersStackParamList, "Splash">;

const Users = ({ navigation }: SplashScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.logoArea}></View>
      </View>
      <View style={styles.midArea}>
        <View style={styles.intro}>
          <Text style={styles.introOne}>취뽀의 자격을 시작해보세요</Text>
          <Text style={styles.introTwo}>취뽀의 자격에서 자격증을</Text>
          <Text style={styles.introTwo}>
            뭐시기 저시기 뭐시기 저시기해보세요!
          </Text>
        </View>
      </View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Email")}
          style={styles.signInBtnBox}
        >
          <Text style={styles.signInText}>가입하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.logInBtnBox}
        >
          <Text style={styles.logInText}>로그인하기</Text>
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

  introOne: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222222",
  },

  introTwo: {
    fontSize: 18,
  },

  btmArea: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink",
  },

  signInBtnBox: {
    backgroundColor: "#222222",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 10,
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  logInBtnBox: {
    backgroundColor: "#868686",
    width: 335,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 6,
  },

  logInText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
