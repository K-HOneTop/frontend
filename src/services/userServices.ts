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
    console.log(data);

    try {
      const response = await axios.post(SERVER_URL + "/member/signin", data, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      console.log(response.status);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }

  //비밀번호 찾기
  async FindPassWord(email: string) {
    console.log(`${SERVER_URL}/member/password/${email}`);
    try {
      const response = await axios.get(
        `${SERVER_URL}/member/password/${email}`
      );
      console.log(response);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }

  //이메일(중복체크)
  async Email(email: string) {
    emailDataString = email;
    console.log(`${SERVER_URL}/member/signup/${emailDataString}`);
    try {
      const response = await axios.post(
        `${SERVER_URL}/member/signup/${emailDataString}`
      );
      console.log(response);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }

  //닉네임 중복체크
  async NickNameCheck(nickname: string) {
    try {
      const response = await axios.get(
        `${SERVER_URL}/member/signup/${nickname}`
      );
      console.log(response);
      return response.status;
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
      return response.status;
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
    console.log(data);

    try {
      const response = await axios.post(SERVER_URL + "/member/signup", data, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      console.log(response);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userServices();
