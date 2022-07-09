import styled from "styled-components";
import clock from "../../images/board.png";
import board from "../../images/clock.png";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { isLogin } from "../../State/atom";
import { useRecoilValue } from "recoil";
const Sc = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 40px;
  background-color: #ffffff;
  top: 240px;
  margin-bottom: 70px;
  height: 465px;
  width: 1150px;
  :hover {
    transition-duration: 1s;
    transform: scale(1.1, 1.1);
  }
`;
const Img = styled.img`
  top: 52px;
  height: 360px;
  width: 400px;
`;
const Ck = styled(Img)`
  position: absolute;
  right: 61px;
`;
const Boa = styled(Img)`
  position: absolute;
  left: 67px;
`;
const Day = styled.h2`
  font-size: 32px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #93caee;
`;
const Day1 = styled(Day)`
  position: absolute;
  top: 73px;
  left: 83px;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  left: 83px;
  top: 140px;
  position: absolute;
  font-size: 64px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #696969;
`;
const School = styled(Day)`
  position: absolute;
  left: 583px;
  top: 65px;
`;
const Born = styled.h1`
  position: absolute;
  font-size: 48px;
  font-weight: 700;
  top: 124px;
  right: 140px;
  font-family: "Noto Sans KR", sans-serif;
  color: #696969;
`;
const Tb = styled.div`
  background-color: blue;
  position: static;
  border-radius: 40px;
  width: 545px;
  height: 465px;
  background-color: #ffffff;
  :last-child {
    position: relative;
  }
  :hover {
    transform: scale(1.1, 1.1);
    transition-duration: 1s;
  }
`;
const Po = styled.div`
  top: 2086px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 1150px;
  height: 530px;
  padding-bottom: 65px;
`;
const Person = styled(BsPerson)`
  position: absolute;
  left: 300px;
  top: 200px;
  width: 240px;
  height: 240px;
  color: #93caee;
`;
const Name = styled.h1`
  position: absolute;
  font-weight: 700px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 32px;
  color: #696969;
  left: 70px;
  top: 115px;
`;
const Name1 = styled(Day)`
  position: absolute;
  left: 70px;
  top: 50px;
`;
const Bl = styled.div`
  width: 60px;
  height: 60px;
  background-color: #93caee;
  position: absolute;
  border-radius: 10px;
`;
const Bl1 = styled(Bl)`
  top: 51px;
  left: 57px;
  opacity: 0.39;
`;
const Bl2 = styled(Bl)`
  top: 51px;
  left: 131px;
  opacity: 0.79;
`;
const Bl3 = styled(Bl)`
  top: 120px;
  left: 57px;
  opacity: 0.5;
`;
const Bl4 = styled(Bl)`
  top: 120px;
  left: 131px;
  opacity: 0.21;
`;
const Gb = styled(Day)`
  position: absolute;
  font-size: 36px;
  font-weight: 500;
  font-family: "Noto Sans", sans-serif;
  top: 312.19px;
  left: 196.43px;
`;
const Cm = styled.h1`
  position: absolute;
  font-size: 32px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  top: 369.46px;
  left: 335.52px;
  color: #696969;
`;
export default function Section() {
  const IsLogin = useRecoilValue(isLogin);
  return (
    <>
      {IsLogin ? (
        <>
          {" "}
          <Link to="/schedule">
            <Sc>
              <Day1>2022년 1학기</Day1>
              <Title>2-2 시간표</Title>
              <Ck src={clock}></Ck>
            </Sc>
          </Link>
          <Link to="/board">
            <Sc>
              <School>대덕소프트웨어마이스터고등학교</School>
              <Born>학교게시판</Born>
              <Boa src={board}></Boa>
            </Sc>
          </Link>
          <Po>
            <Link to="/mypage">
              <Tb>
                <Name1>김대희 님 반가워요</Name1>
                <Name>마이페이지</Name>
                <Person />
              </Tb>
            </Link>
            <Link to="/github">
              <Tb>
                <Bl1 />
                <Bl2 />
                <Bl3 />
                <Bl4 />
                <Gb>Github Commit</Gb>
                <Cm>커밋 확인</Cm>
              </Tb>
            </Link>
          </Po>
        </>
      ) : (
        <>
          <div
            onClick={() => {
              alert("로그인이 필요합니다.");
            }}
          >
            <Sc>
              <Day1>2022년 1학기</Day1>
              <Title>2-2 시간표</Title>
              <Ck src={clock}></Ck>
            </Sc>
          </div>
          <div
            onClick={() => {
              alert("로그인이 필요합니다.");
            }}
          >
            <Sc>
              <School>대덕소프트웨어마이스터고등학교</School>
              <Born>학교게시판</Born>
              <Boa src={board}></Boa>
            </Sc>
          </div>
          <Po>
            <div
              onClick={() => {
                alert("로그인이 필요합니다.");
              }}
            >
              <Tb>
                <Name1>김대희 님 반가워요</Name1>
                <Name>마이페이지</Name>
                <Person />
              </Tb>
            </div>
            <Link to="/github">
              <Tb>
                <Bl1 />
                <Bl2 />
                <Bl3 />
                <Bl4 />
                <Gb>Github Commit</Gb>
                <Cm>커밋 확인</Cm>
              </Tb>
            </Link>
          </Po>
        </>
      )}
    </>
  );
}
