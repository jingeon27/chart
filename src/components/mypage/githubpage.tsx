import styled from "styled-components";
const github = require("https://ghchart.rshah.org/jingoen27");
const Githubimg = styled.div`
  background-image: url("https://ghchart.rshah.org/jingoen27");
  width: 70px;
  height: 70px;
  background-color: #000000;
`;
export default function Githubpage() {
  return (
    <>
      <Githubimg />
    </>
  );
}
