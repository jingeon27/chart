import Meal from "./meal";
import Section from "./section";
import { useEffect } from "react";
import axios from "axios";
import {
  schoolCode,
  areaCode,
  gradeEl,
  classsNum,
  isLogin,
} from "../../State/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setCookie } from "../../State/cookie";
export default function Mainpage() {
  const setIsLogin = useSetRecoilState(isLogin);
  const SchoolCode = useRecoilValue(schoolCode);
  const AreaCode = useRecoilValue(areaCode);
  const grade = useRecoilValue(gradeEl);
  const ClassNum = useRecoilValue(classsNum);
  useEffect(() => {
    const func = window.location.search;
    const code = func.replace("?code=", "");
    console.log(code);
    acessToken();
    async function acessToken() {
      const logindata = {
        accessToken: code,
        schoolCode: SchoolCode,
        areaCode: AreaCode,
        grade: grade,
        classNum: ClassNum,
      };
      await axios
        .post("http://118.67.130.149:8080/api/v1/auth/signup/code", logindata)
        .then((res) => {
          console.log(res);
          name();
          async function name() {
            const signindata = {
              accessToken: code,
            };
            await axios
              .post(
                "http://118.67.130.149:8080/api/v1/auth/login/code",
                signindata
              )
              .then((res: any) => {
                console.log(res);
                const token = res.data.refreshToken;
                console.log(token);
                window.sessionStorage.setItem("refreshToken", token);
                const Token = sessionStorage.getItem("refreshToken");
                console.log(Token, "세션스토리지 잘 작동되는지 확인");
                const access_Token = res.data.accessToken;
                window.sessionStorage.setItem("accessToken", access_Token);
                console.log(sessionStorage.getItem("accessToken"));
                setIsLogin(true);
              })
              .catch((err) => {
                console.log(err, "잘못된로그인오류입니다.");
              });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("잘못한거임ㅋ");
        });
    }
  }, []);
  useEffect(() => {
    const func = window.location.search;
    const code = func.replace("?code=", "");
    name();
    async function name() {
      const signindata = {
        accessToken: code,
      };
      await axios
        .post("http://118.67.130.149:8080/api/v1/auth/login/code", signindata)
        .then((res: any) => {
          console.log(res);
          const token = res.data.refreshToken;
          console.log(token);
          window.sessionStorage.setItem("refreshToken", token);
          const Token = sessionStorage.getItem("refreshToken");
          console.log(Token, "세션스토리지 잘 작동되는지 확인");
          const access_Token = res.data.accessToken;
          window.sessionStorage.setItem("accessToken", access_Token);
          console.log(sessionStorage.getItem("accessToken"));
          setIsLogin(true);
        })
        .catch((err) => {
          console.log(err, "잘못된로그인오류입니다.");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <>
      <Meal />
      <Section />
    </>
  );
}
