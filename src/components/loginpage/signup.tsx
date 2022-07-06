import styled from "styled-components";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  loginPageState,
  loginState,
  schoolCode,
  areaCode,
  classsNum,
  gradeEl,
} from "../../State/atom";
const Login = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 999999px;
  z-index: 2;
  margin: auto;
  width: 732px;
  height: 719px;
  border-radius: 50px;
  background-color: #ffffff;
`;
const Endloginbtn = styled.div`
  border-radius: 30px;
  background-color: #93caee;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;

  top: 550px;
  height: 90px;
  width: 530px;
  :hover {
    background-color: #6497b5;
  }
`;
const Signintxt = styled.div`
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
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
`;
const Lgul = styled.ul`
  position: absolute;
  padding: 0;
  top: 180px;
  margin: 0;
  /* background-color: #000000; */
  width: 100%;
  height: 300px;
  li {
    list-style: none;
    height: 20%;
    width: 70%;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 5%;
  }
  input {
    font-size: 20px;
    border-radius: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 100;
    height: 62px;
    width: 518px;
    border: solid 2px #93caee;
    overflow: scroll;
    :focus {
      border: solid 2px #6497b5;
    }
  }
`;
const Signin = styled.h1`
  position: absolute;
  font-family: "Noto Sans", sans-serif;
  margin-top: 5%;
  font-weight: 500;
  text-align: center;
  color: #696969;
  font-size: 40px;
  top: 79px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
export default function Signup() {
  const [state, setState] = useRecoilState<boolean>(loginPageState);
  const [signState, setSignState] = useRecoilState<boolean>(loginState);
  const setGradeState = useSetRecoilState(gradeEl);
  const setSchoolState = useSetRecoilState(schoolCode);
  const setClassState = useSetRecoilState(classsNum);
  const setAreaState = useSetRecoilState(areaCode);
  const [infoState, setInfoState] = useState("");

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  useEffect(() => {
    const params = {
      school: infoState,
    };
    Bring();
    async function Bring() {
      await axios
        .post("http://118.67.130.149:8080/api/v1/school", null, { params })
        .then((res) => {
          console.log(res.data[0]);
          const data = res.data[0];
          setSchoolState(data.addressCode);
          setAreaState(data.areaCode);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [infoState, setAreaState, setInfoState, setSchoolState]);
  interface InputElprops {
    onchange: ChangeEventHandler;
    placeholder: string;
    list: string;
  }
  interface schoolprops {
    school: string;
  }
  interface gradeProps {
    grade: number;
  }
  const dtl: schoolprops[] = [
    { school: "대덕소프트웨어마이스터고등학교" },
    { school: "계룡고등학교" },
  ];
  const grade: gradeProps[] = [{ grade: 1 }, { grade: 2 }, { grade: 3 }];
  const inputel: InputElprops[] = [
    {
      onchange: function SchoelEl(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setInfoState(e.target.value);
      },
      placeholder: "학교를 검색하세요",
      list: "depList",
    },
    {
      onchange: function GradeEl(e: any) {
        console.log(e.target.value);
        setGradeState(e.target.value);
      },
      placeholder: "학년을 입력하세요",
      list: "grade",
    },
    {
      onchange: function ClassEl(e: any) {
        console.log(e.target.value);
        setClassState(e.target.value);
      },
      placeholder: "반을 입력하세요",
      list: "",
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Endlogin = () => {
    setState(!state);
    setSignState(!signState);
  };

  return (
    <>
      {state ? (
        <></>
      ) : (
        <Login>
          <Signin>Sign in</Signin>
          <Lgul>
            {inputel.map((user) => (
              <li>
                <input
                  type="text"
                  placeholder={user.placeholder}
                  list={user.list}
                  onChange={user.onchange}
                ></input>
              </li>
            ))}
            <datalist id="depList">
              {dtl.map((user) => (
                <option value={user.school}></option>
              ))}
            </datalist>
            <datalist id="grade">
              {grade.map((user) => (
                <option value={user.grade}></option>
              ))}
            </datalist>
          </Lgul>

          <Endloginbtn onClick={Endlogin}>
            <Signintxt>Sign in</Signintxt>
          </Endloginbtn>
        </Login>
      )}
    </>
  );
}
