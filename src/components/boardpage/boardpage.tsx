import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { writeOn } from "../../State/atom";
const Button = styled.div`
  position: absolute;
  left: 1347px;
  top: 864px;
  width: 507px;
  height: 80px;
  background-color: #93caee;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const Center = styled.div`
  color: #ffffff;
  font-family: "Noto Sans Kr", sans-serif;
  font-size: 30px;
  font-weight: 500;
  position: relative;
  width: 300px;
  height: 40px;
  left: 33%;
  top: 18%;
`;
const Sort = styled.div`
  position: absolute;
  width: 557px;
  height: 60px;
  left: 1297px;
  top: 154px;
  text-align: right;
`;
const School = styled.div`
  font-family: "Amiko";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 47px;
  color: #93caee;
`;
const Sort2 = styled.div`
  position: absolute;
  width: 557px;
  height: 75px;
  left: 1297px;
  top: 214px;
  text-align: right;
`;
const SchoolBoard = styled.div`
  font-family: "Amiko", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 67px;
  letter-spacing: 0.05em;
  color: #696969;
`;
export default function Boardpage() {
  const setWrite = useSetRecoilState(writeOn);
  return (
    <>
      <Sort>
        <School>대덕소프트웨어마이스터고등학교</School>
      </Sort>
      <Sort2>
        <SchoolBoard>학교 게시판</SchoolBoard>
      </Sort2>
      <Button
        onClick={() => {
          setWrite(true);
        }}
      >
        <Center>새 글 작성하기</Center>
      </Button>
    </>
  );
}
