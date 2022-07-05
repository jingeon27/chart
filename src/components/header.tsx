import Image from "../images/Appicon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Signin from "./loginpage/signin";
import Signup from "./loginpage/signup";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginState } from "../State/atom";
import { loginPageState } from "../State/atom";
type arrprops = {
  value: string;
  id: string;
};
const Head = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 90px;
  top: 0px;
  left: 0px;
  padding: 0%;
`;
const Logo = styled.img`
  position: absolute;
  width: 200px;
  height: 60px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
`;
const Mainmenu = styled.ul`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  li {
    list-style-type: none;
  }
  .item .item__contents {
    width: 100%;
    position: fixed;
    left: 0;
    display: block;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const ItemName = styled(Link)`
  margin: 10px 40px 11px 45px;
  font-size: 20px;
  opacity: 0.61;
  /* color: #000000; */
  color: #000000;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  text-decoration: none;
  &:focus,
  &:hover {
    color: #93caee;
  }
`;
const LogIn = styled.div`
  margin-right: 80px;
  font-size: 20px;
  opacity: 0.61;
  color: #000000;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  text-decoration: none;
  &:focus,
  &:hover {
    color: #93caee;
  }
`;
const Logup = styled.div`
  margin: 0px 20px 11px 45px;
  font-size: 20px;
  opacity: 0.61;
  color: #000000;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  text-decoration: none;
  &:focus,
  &:hover {
    color: #93caee;
  }
`;
const Slash = styled.div`
  position: absolute;
  top: 10px;
  right: 135px;
  margin-left: 10px;
  list-style: none;
  width: 20px;
  height: 30px;
  transform: rotate(35deg);
  border-left: 2px solid rgba(0, 0, 0, 0.61);
`;
const arr: arrprops[] = [
  { value: "시간표", id: "/schedule" },
  { value: "게시판", id: "/board" },
  { value: "마이페이지", id: "/mypage" },
];
export default function Header() {
  // const searchInputRef = useRef<any>(null);
  // const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [state, setState] = useRecoilState<boolean>(loginState);
  const [signState, setSignState] = useRecoilState<boolean>(loginPageState);
  const showSignup = () => {
    setState(!state);
  };
  const showSignin = () => {
    setSignState(!signState);
  };
  // window.onclick((e) => setState(false));
  return (
    <>
      {state ? (
        <>
          <Signup />
        </>
      ) : (
        <></>
      )}
      {signState ? (
        <>
          <Signin />
        </>
      ) : (
        <></>
      )}
      <Head>
        <StyledLink to="/">
          <Logo src={Image}></Logo>
        </StyledLink>
        <Mainmenu>
          {arr.map((user) => (
            <li className="item">
              <ItemName to={user.id}>{user.value}</ItemName>
            </li>
          ))}
          <li>
            <Logup onClick={showSignup}>Signup</Logup>
          </li>
          <li>
            <Slash></Slash>
          </li>
          <li>
            <LogIn onClick={showSignin}>Signin</LogIn>
          </li>
        </Mainmenu>
      </Head>
    </>
  );
}
