import axios from "axios";
import { signIn, signUp } from "../types/UserTypes";
import { SERVER_URL } from "../data/serverData";

class userServices {
  //로그인
  async SignIn(email: string, password: string) {
    const dataString: signIn = {
      email: email,
      password: password,
    };
    const data = JSON.stringify(dataString);

    try {
      const response = await axios.post(SERVER_URL + "/member/signin", {
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //회원가입
  async SignUp(email: string, password: string, nickname: string) {
    const dataString: signUp = {
      email: email,
      password: password,
      nickname: nickname,
    };
    const data = JSON.stringify(dataString);

    try {
      const response = await axios.post(SERVER_URL + "/member/signup", {
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userServices();
