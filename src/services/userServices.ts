import axios from "axios";
import { email, authCode, signIn, signUp } from "../types/UserTypes";
import { SERVER_URL } from "../data/serverData";

let emailDataString: email;

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
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //이메일
  async Email(email: string) {
    emailDataString = email;
    const URL = SERVER_URL + "/mail?rcv=" + emailDataString;
    console.log(URL);
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  //인증코드
  async AuthCode(authCode: string) {
    const URL =
      SERVER_URL + "/mail/auth?rcv=" + emailDataString + "&code=" + authCode;
    console.log(URL);

    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    //서버에 인증코드 전송
  }

  //회원가입
  async SignUp(name: string, password: string, nickname: string) {
    const dataString: signUp = {
      name: name,
      email: emailDataString,
      nickname: nickname,
      password: password,
    };
    const data = JSON.stringify(dataString);

    try {
      const response = await axios.post(SERVER_URL + "/member/signup", {
        data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userServices();
