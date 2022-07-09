/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
type Arrprops = {
  id: string;
};
const Table = styled.div`
  position: absolute;
  top: 180px;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const UserName = styled.div`
  color: #93caee;
  font-size: 35px;
  font-weight: 700;
  font-family: "Amiko", sans-serif;
`;
const UserNickName = styled.div`
  color: #93caee;
  font-size: 35px;
  font-weight: 700;
  font-family: "Amiko", sans-serif;
`;
const ListTable = styled.li`
  font-size: 20px;
  list-style: none;
  color: #696969;
  text-align: center;
  font-weight: 700;
  font-family: "Amiko", sans-serif;
`;
const TableBox = styled.div`
  width: 725px;
  height: 100px;
  background-color: #ffffff;
  right: 0;
  left: 0;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const UlCenter = styled.ul`
  padding: 0;
  top: 260px;
  position: absolute;
  width: 100%;
  left: 0;
`;
const Center = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
  left: 30%;
  top: 30%;
`;
const arr: Arrprops[] = [
  { id: "최근 작성한 게시물" },
  { id: "개인정보 수정하기" },
  { id: "개인정보 처리방침" },
  { id: "개발자 소개" },
  { id: "라이선스" },
];
export default function Mypage() {
  const [userId, setUserId] = useState("");
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
          console.log(res);
          setUserId(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return (
    <>
      <Table>
        <UserName>
          {userId}
          <span style={{ color: "#696969" }}>님</span>
        </UserName>
        {/* <UserNickName>
          kimdaehee0824<span style={{ color: "#696969" }}>님</span>
        </UserNickName> */}
      </Table>
      <UlCenter>
        {arr.map((user) => (
          <TableBox>
            <Center>
              <ListTable>{user.id}</ListTable>
            </Center>
          </TableBox>
        ))}
      </UlCenter>
    </>
  );
}
