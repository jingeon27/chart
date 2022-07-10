import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardContent, boardTitle, showBoardText } from "../../State/atom";
const Container = styled.div`
  position: absolute;
  width: 890px;
  height: 790px;
  left: 964px;
  top: 154px;
  background: #ffffff;
  border-radius: 50px;
`;
const Sort = styled.div`
  position: absolute;
  width: 700px;
  height: 22px;
  left: 64px;
  top: 47px;
  text-align: left;
`;
const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #93caee;
`;
const Sort2 = styled.div`
  position: absolute;
  width: 726px;
  height: 544px;
  left: calc(50% - 726px / 2 - 18px);
  top: 117px;
`;
const Text = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #696969;
`;
const Button = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  top: 650px;
  width: 507px;
  height: 80px;
  background-color: #93caee;
  border-radius: 30px;
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
  left: 43%;
  top: 18%;
`;
export default function ShowBoard() {
  const setShowBoard = useSetRecoilState(showBoardText);
  const showContent = useRecoilValue(boardContent);
  const showTitle = useRecoilValue(boardTitle);
  return (
    <Container>
      <Sort>
        <Title>
          제목 : &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#696969" }}>{showTitle}</span>
        </Title>
      </Sort>
      <Sort2>
        <Text>{showContent}</Text>
      </Sort2>
      <Button onClick={() => setShowBoard(false)}>
        <Center>확인</Center>
      </Button>
    </Container>
  );
}
