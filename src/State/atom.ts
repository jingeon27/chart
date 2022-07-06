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
