import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//Users Stack
import { UsersStackParamList } from "../../types/stacks/StackTypes";

//Export type
export type WelcomeScreenProps = StackScreenProps<
  UsersStackParamList,
  "Welcome"
>;

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const [time, setTime] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        {/*<View style={styles.logoArea}></View>*/}
      </View>
      <View style={styles.midArea}>
        <View style={styles.intro}>
          <View style={styles.welcomeIntro}>
            <View style={styles.welcomeIntroOneBox}>
              <Text style={styles.welcomeIntroOne}>취뽀의 자격</Text>
              <Text style={styles.welcomeIntroOneSub}>에</Text>
            </View>
            <Text style={styles.welcomeIntroTwo}>오신 걸 환영합니다.</Text>
          </View>
          <Text style={styles.introTwo}>취뽀의 자격에서 자격증을</Text>
          <Text style={styles.introTwo}>
            뭐시기 저시기 뭐시기 저시기해보세요!
          </Text>
        </View>
      </View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.logInBtnBox}
        >
          <Text style={styles.logInText}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  topArea: {
    flex: 0.8,
    alignItems: "center",
    //backgroundColor: "green",
  },

  logoArea: {
    marginTop: 174,
    width: 187.5,
    height: 187.5,
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
    flexDirection: "column",
    marginBottom: 10,
    alignItems: "center",
  },

  welcomeIntroOneBox: {
    flexDirection: "row",
  },

  welcomeIntroOne: {
    fontSize: 20,
    color: "#F56C3B",
    fontWeight: "700",
  },
  welcomeIntroOneSub: {
    fontSize: 20,
    color: "#222222",
    fontWeight: "700",
  },

  welcomeIntroTwo: {
    fontSize: 20,
    color: "#222222",
    fontWeight: "700",
  },

  introTwo: {
    color: "#ADADAD",
    fontWeight: "400",
    fontSize: 15,
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
  },

  logInText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
});
