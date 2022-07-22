import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../data";
type arrprop = {
  id: string;
};
const Ta = styled.div`
  position: absolute;
  height: 832px;
  width: 922px;
  left: 50%;
  top: 125px;
  border-radius: 40px;
  background-color: #ffffff;
  margin-bottom: 200px;
`;
const Ln = styled.div`
  position: absolute;
  width: 2px;
  height: 800px;
  background: #93caee;
  border-radius: 1px;
  left: 100px;
  top: 15px;
`;
const Ln1 = styled.div`
  position: absolute;
  width: 900px;
  height: 2px;
  left: 15px;
  top: 100px;
  background: #93caee;
  border-radius: 1px;
`;
const Sort = styled.ul`
  position: absolute;
  display: flex;
  left: 30px;
  top: 20px;
`;
const St = styled.ul`
  position: absolute;
  top: 65px;
  left: -15px;
`;
const Day = styled.li`
  list-style: none;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #b5b3b3;
  margin-left: 120px;
`;
const Day1 = styled.li`
  list-style: none;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #b5b3b3;
  margin-top: 65px;
`;
const Sr = styled.div`
  position: absolute;
  display: flex;
  top: 65px;
  left: 75px;
  ul {
    padding-left: 100px;
  }
  li {
    list-style: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 36px;
    color: #696969;
    margin-top: 65px;
  }
`;
const H2 = styled.div`
  position: absolute;
  top: 150px;
  left: 110px;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #93caee;
`;
const H1 = styled.div`
  position: absolute;
  top: 225px;
  left: 110px;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #696969;
`;
const arr: arrprop[] = [
  { id: "월" },
  { id: "화" },
  { id: "수" },
  { id: "목" },
  { id: "금" },
];
const arr1: arrprop[] = [
  { id: "1교시" },
  { id: "2교시" },
  { id: "3교시" },
  { id: "4교시" },
  { id: "5교시" },
  { id: "6교시" },
  { id: "7교시" },
];

export default function Schedule() {
  const [showSubject, setShowSubject] = useState([]);
  const [showSubjectA, setShowSubjectA] = useState([]);
  const [showSubjectB, setShowSubjectB] = useState([]);
  const [showSubjectC, setShowSubjectC] = useState([]);
  const [showSubjectD, setShowSubjectD] = useState([]);
  const [showClass, setShowClass] = useState(0);
  const [showGrade, setShowGrade] = useState(0);
  useEffect(() => {
    const token = window.sessionStorage.getItem("accessToken");
    asdf();
    async function asdf() {
      await axios({
        method: "GET",
        url: BASE_URL + "/api/v1/timetable/week",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.data);
          const data = res.data.data;
          setShowSubject(data[0].subjects.slice(0, 7));
          setShowSubjectA(data[1].subjects.slice(0, 7));
          setShowSubjectB(data[2].subjects.slice(0, 7));
          setShowSubjectC(data[3].subjects.slice(0, 7));
          setShowSubjectD(data[4].subjects.slice(0, 7));
          console.log(data[0].subjects);
          console.log(showSubject);
          setShowClass(data[0].classNum);
          console.log(showClass);
          setShowGrade(data[0].grade);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const arr3 = [
    { id: showSubject },
    { id: showSubjectA },
    { id: showSubjectB },
    { id: showSubjectC },
    { id: showSubjectD },
  ];
  return (
    <>
      <H2>2022년 1학기</H2>
      <H1>{`${showGrade}-${showClass}시간표`}</H1>
      <Ta>
        <Ln />
        <Ln1 />
        <Sort>
          {arr.map((user) => (
            <Day>{user.id}</Day>
          ))}
        </Sort>
        <St>
          {arr1.map((user) => (
            <Day1>{user.id}</Day1>
          ))}
        </St>
        <Sr>
          {showSubject === [] ? (
            <div>Loading...</div>
          ) : (
            <>
              {arr3.map((user) => (
                <ul>
                  {user.id.map((line: any) => (
                    <li>{line.name.slice(0, 2)}</li>
                  ))}
                </ul>
              ))}
            </>
          )}
        </Sr>
      </Ta>
    </>
  );
}
