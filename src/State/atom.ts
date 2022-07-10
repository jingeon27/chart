import { atom } from "recoil";

export const loginPageState = atom({
  key: "loginPageState",
  default: false,
});
export const loginState = atom({
  key: "loginState",
  default: false,
});
export const userNameState = atom({
  key: "userNameState",
  default: { accesssToken: "", userName: "", userNickName: "" },
});
export const schoolCode = atom({
  key: "schoolCode",
  default: "",
});
export const areaCode = atom({
  key: "areaCode",
  default: "",
});
export const gradeEl = atom({
  key: "gradeEl",
  default: 0,
});
export const classsNum = atom({
  key: "classNum",
  default: 0,
});
export const isLogin = atom({
  key: "isLogin",
  default: false,
});
export const schoolName = atom({
  key: "schoolName",
  default: "",
});
export const writeOn = atom({
  key: "writeOn",
  default: false,
});
export const showBoardText = atom({
  key: "showBoardText",
  default: false,
});
export const boardTitle = atom({
  key: "boardTitle",
  default: "",
});
export const boardContent = atom({
  key: "boardContent",
  default: "",
});
