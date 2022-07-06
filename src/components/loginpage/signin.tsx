import styled from "styled-components";
import React, { useEffect } from "react";
import Chart from "../../images/Chart.png";
import Github from "../../images/Github.png";
import { useRecoilState } from "recoil";
import { loginPageState } from "../../State/atom";
const Page = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 999999px;
  z-index: 2;
  margin: auto;
  width: 40%;
  height: 45%;
  border-radius: 50px;
  background-color: #ffffff;
`;
const Btn = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 30px;
  width: 78%;
  height: 24%;
  background-color: #696969;
  :hover {
    background-color: #000000;
  }
`;
const Welcome = styled.img`
  position: absolute;
  width: 30%;
  height: 25%;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 9%;
  height: 50%;
  position: absolute;
  left: 18%;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;
const Text = styled.div`
  position: absolute;
  font-family: "Noto Sans", sans-serif;
  bottom: 0;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #ffffff;
`;

export default function Signin() {
  const [state, setState] = useRecoilState(loginPageState);
  const loginUri = `https://github.com/login/oauth/authorize?scope=gist,%20read:org,%20read:repo_hook,%20repo,%20user:emai&client_id=e68697d72d75b1f8461f`;
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const Endlogin = () => {
    setState(!state);
  };
  return (
    <>
      <div>
        <Page>
          <Welcome src={Chart}></Welcome>
          <a href={loginUri}>
            <Btn>
              <Logo src={Github} onClick={Endlogin}></Logo>

              <Text>Login in Github</Text>
            </Btn>
          </a>
        </Page>
      </div>
    </>
  );
}
