import { useRecoilState } from "recoil";
import styled from "styled-components";
import { writeOn } from "../../State/atom";
const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 1026px;
  height: 843px;
  background-color: #f4f5f8;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 999999px;
`;
const Sort = styled.div`
  position: absolute;
  width: 330px;
  height: 100px;
  text-align: center;
  left: 348px;
  top: 52px;
`;
const H1 = styled.h1`
  font-size: 40px;
  letter-spacing: 5px;
  font-weight: 700;
  color: #696966;
  letter-spacing: 0.05em;
  font-family: "Noto Sans KR", sans-serif;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;
const TitleInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 817px;
  height: 41px;
  left: 107px;
  top: 192px;
  border: 2px solid #93caee;
  border-radius: 10px;
`;
const ContentsInput = styled.textarea`
  box-sizing: border-box;
  white-space: pre-line;
  position: absolute;
  width: 817px;
  height: 384px;
  left: 107px;
  top: 255px;
  word-break: break-all;
  border: 2px solid #93caee;
  border-radius: 10px;
  white-space: pre-wrap;
`;
const Button = styled.div`
  position: absolute;
  width: 518px;
  height: 90px;
  left: 254px;
  top: 703px;

  background: #93caee;
  border-radius: 30px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const Adjustment = styled.div`
  position: absolute;
  width: 254px;
  height: 57px;
  left: 132px;
  top: 16px;

  text-align: center;
`;
const Success = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  color: #ffffff;
  text-shadow: 0px 1px 1px rgba(198, 198, 198, 0.25);
  letter-spacing: -0.02em;
`;
export default function Boardwrite() {
  const [state, setState] = useRecoilState(writeOn);
  return (
    <>
      <Container>
        <Sort>
          <H1>새글 작성하기</H1>
        </Sort>
        <TitleInput placeholder="제목을 입력하세요"></TitleInput>
        <ContentsInput placeholder="본문을 입력하세요."></ContentsInput>
        <Button
          onClick={() => {
            setState(!state);
          }}
        >
          <Adjustment>
            <Success>게시하기</Success>
          </Adjustment>
        </Button>
      </Container>
    </>
  );
}
