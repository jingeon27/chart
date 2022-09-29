import React, { useState, useEffect } from "react";
import axios from "axios";
import Boardpage from "./boardpage";
import Boardwrite from "./boardwrite";
import {
  writeOn,
  showBoardText,
  boardContent,
  boardTitle,
} from "../../State/atom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import ShowBoard from "./showboard";
import styled from "styled-components";
import { BASE_URL } from "../../data";
// interface Airline {
//   id: number;
//   name: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quaters: string;
//   website: string;
//   established: string;
// }

// interface Passenger {
//   _id: string;
//   name: string;
//   trips: number;
//   airline: Airline;
//   __v: number;
// }

// interface Response {
//   totalPassengers: number;
//   totalPages: number;
//   data: Array<Passenger>;
// }
const Location = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 800px;
  height: 800px;
  left: 80px;
  top: 154px;
`;
const Container = styled.li`
  width: 1121px;
  height: 70px;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 20px;
  list-style: none;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const Sort = styled.div`
  position: relative;
  top: 22px;
  left: 70px;
  width: 500px;
  height: 26px;
`;
const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */
  text-align: left;
  letter-spacing: -0.5px;

  color: #696969;
`;
const Sort2 = styled.div`
  position: relative;
  top: -4px;
  margin: 0;
  padding: 0;
  right: -850px;
  width: 200px;
  height: 26px;
`;
const Writter = styled.div`
  text-align: left;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */
  text-align: right;
  letter-spacing: -0.5px;
  color: rgba(147, 202, 238, 0.79);
`;
const Container2 = styled.div`
  width: 789px;
  height: 70px;
  margin-bottom: 20px;
  background: #ffffff;
  border-radius: 20px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const Sort3 = styled.div`
  position: relative;
  top: 22px;
  left: 40px;
  width: 500px;
  height: 26px;
`;
const Sort4 = styled.div`
  position: relative;
  top: -4px;
  margin: 0;
  padding: 0;
  right: -550px;
  width: 200px;
  height: 26px;
`;
function App() {
  const state = useRecoilValue(writeOn);
  const [idx, setIdx] = useState<number>(0);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [items, setItems] = useState([]);
  const [showBoard, setShowBoard] = useRecoilState(showBoardText);
  const setShowContent = useSetRecoilState(boardContent);
  const setShowTitle = useSetRecoilState(boardTitle);
  const handlePageChange = (currentPage: number): void => {
    setIdx(currentPage);
  };

  // const divs: number[] = Array.from({ length: 10 }, (t, i) => {
  //   return { name: "김진건" };
  // });

  useEffect(() => {
    const fetch = async () => {
      const token = sessionStorage.getItem("accessToken");
      const params = { idx, size: 10 };
      // const {
      //   // data: { totalPages, data },
      // } =
      await axios({
        method: "GET",
        baseURL: BASE_URL + "/api/v1/question/list",
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        const data = res.data;
        setItems(data.content);
        console.log(items);
      });
      // console.log(totalPages);
      // console.log(data);
      // setTotalPages(totalPages);
      // setItems(data);
    };

    fetch();
  }, [idx, state]);
  function showBoardTextEL(title: string, content: string) {
    setShowTitle(title);
    setShowContent(content);
    setShowBoard(true);
  }
  return (
    <div style={{ height: "1080px" }}>
      {/* <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul> */}
      {/* 
      <Pagination
        count={totalPages}
        page={idx}
        onPageChange={handlePageChange}
      /> */}
      {showBoard ? (
        <>
          <Location>
            {items.map((user: any) => (
              <Container2
                onClick={(e) => showBoardTextEL(user.title, user.content)}
              >
                <Sort3>
                  <Title>
                    <span style={{ color: "#000" }}>제목 : </span>
                    &nbsp; &nbsp; &nbsp;{user.title}
                  </Title>
                </Sort3>
                <Sort4>
                  <Writter>작성자 - {user.writer.name}</Writter>
                </Sort4>
              </Container2>
            ))}
          </Location>
          <ShowBoard />
        </>
      ) : (
        <>
          <Location>
            {items.map((user: any) => (
              <Container
                onClick={(e) => showBoardTextEL(user.title, user.content)}
              >
                <Sort>
                  <Title>
                    <span style={{ color: "#000" }}>제목 : </span>
                    &nbsp; &nbsp; &nbsp;{user.title}
                  </Title>
                </Sort>
                <Sort2>
                  <Writter>작성자 - {user.writer.name}</Writter>
                </Sort2>
              </Container>
            ))}
          </Location>
          <Boardpage />
        </>
      )}
      {state ? <Boardwrite /> : <></>}
    </div>
  );
}

export default App;
