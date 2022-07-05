import { createGlobalStyle } from "styled-components";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from "./components/mypage/mypage";
import Mainpage from "./components/mainpage/mainpage";
import Schedule from "./components/schedluepage/schedule";
import { RecoilRoot } from "recoil";
import Board from "./components/boardpage/board";
import Githubpage from "./components/mypage/githubpage";
const GlobalStyle = createGlobalStyle`
body {
  background: #f4f5f8;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
`;
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/board" element={<Board />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/github" element={<Githubpage />} />
          </Routes>
          <Header />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
