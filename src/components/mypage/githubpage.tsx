import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: auto;
  width: 930px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 30px;
`;
const Sort = styled.div`
  position: absolute;
  top: 30px;
  left: 45px;
  width: 964px;
  height: 289px;
`;
const Control = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 270px;
  margin: 0 auto;
  width: 700px;
  height: 120px;
  text-align: center;
`;
const Username = styled.h1`
  color: #93caee;
  font-size: 40px;
  font-weight: 700;
  font-family: "Amiko", sans-serif;
`;
export default function Githubpage() {
  const [userId, setUserId] = useState<any>("");
  const [commit, setCommit] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    name();
    async function name() {
      await axios({
        method: "GET",
        baseURL: "http://118.67.130.149:8080/api/v1/auth/my",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(userId);
          console.log(res);
          setUserId(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    name();
    async function name() {
      await axios({
        method: "GET",
        baseURL: "https://api.github.com/repo/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId, setUserId]);
  return (
    <>
      <Control>
        <Username>{userId}</Username>
      </Control>

      <Container>
        <Sort>
          {userId !== "" ? (
            <>
              <GitHubCalendar
                username={userId}
                color={"#7Daece"}
              ></GitHubCalendar>
            </>
          ) : (
            <div>없습니다.</div>
          )}
        </Sort>
      </Container>
    </>
  );
}
