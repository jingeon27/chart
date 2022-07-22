import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import dayjs from "dayjs";
import { areaCode, isLogin, schoolCode, schoolName } from "../../State/atom";
import { useRecoilValue } from "recoil";
interface mealProps {
  DDISH_NM: string;
}
interface daytimeprops {
  day: string;
}
const Day = styled.div`
  position: inherit;
  top: 20px;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #93caee;
  :hover {
    cursor: default;
  }
`;
const Title = styled.h1`
  top: 25px;
  position: inherit;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #696969;
  :hover {
    cursor: default;
  }
`;
const Inner = styled.div`
  position: relative;
  top: 150px;
  left: 0;
  right: 0;
  width: 1120px;
  height: 730px;
  margin: 0 auto;
`;
const Container = styled.li`
  list-style: none;
  margin-right: 35px;
  margin-top: 100px;
  width: 350px;
  height: 465px;
  border-radius: 20px;
  background-color: #ffffff;
`;
const Sort = styled.div`
  position: absolute;
  display: flex;
  margin: 0;
  left: -40px;
`;
const MealMenu = styled.li`
  margin-top: 75px;
  font-size: 32px;
  list-style-type: none;
  text-align: center;
`;
const Before = styled(BsChevronLeft)`
  position: absolute;
  top: 90px;
  left: 305px;
  width: 40px;
  color: #696969;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
const Next = styled(BsChevronRight)`
  position: absolute;
  top: 90px;
  left: 745px;
  width: 40px;
  color: #696969;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
const Entire = styled.div`
  .swiper {
    list-style: none;
    position: absolute;
    float: left;
    margin-right: 30px;
  }
  .niem {
    position: relative;
    left: 390px;
  }
`;
const MealMenuEl = styled.span`
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 200%;
  :hover {
    cursor: default;
  }
`;
const Daytime = styled.li`
  font-family: "Amiko", sans-serif;
  color: #696969;
  font-size: 24px;
  list-style: none;
  float: left;
  margin-left: 335px;
  :hover {
    cursor: default;
  }
`;
const Daytimeul = styled.ul`
  left: -260px;
  top: 200px;
  right: 0;
  position: absolute;
  width: 1200px;
  height: 40px;
`;
export default function Meal() {
  const [showMenu, setShowMenu] = useState([]);
  // const [showBr, setShowBr] = useState([]);
  // const [showLu, setShowLu] = useState([]);
  // const [showDi, setShowDi] = useState([]);
  const [day, setDay] = useState<any>(new Date());
  // const AreaCode = useRecoilValue(areaCode);
  // const SchoolCode = useRecoilValue(schoolCode);
  const IsLogin = useRecoilValue(isLogin);
  let today = new Date(day);
  let dateString: string = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let dayName: string = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  const arr = [
    { list: "급식없음" },
    { list: "급식없음" },
    { list: "급식없음" },
  ];
  useEffect(() => {});
  useEffect(() => {
    console.log("asd");
    const date = new Date(day);
    const mealDate = dayjs(date).format("YYYYMMDD");
    // const token = localStorage.getItem("accessToken");
    getMeal();
    async function getMeal() {
      const params = {
        // Type: "json",
        // pIndex: 1,
        // pSize: 100,
        // ATPT_OFCDC_SC_CODE: "G10",
        // SD_SCHUL_CODE: "7430310",
        MLSV_YMD: mealDate,
        //date: mealDate,
      };

      await axios
        .get(
          "https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430310",
          { params }
        )
        .then((res) => {
          const data = res.data;
          setShowMenu(data.mealServiceDietInfo[1].row);
        })
        .catch((err) => {
          console.log(err);
        });
      // await axios({
      //   method: "GET",
      //   baseURL: BASE_URL+"/api/v1/meal",
      //   params: params,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //     const breakfast = res.data.breakfast;
      //     const lunch = res.data.lunch;
      //     const dinner = res.data.dinner;
      //     setShowBr(breakfast);
      //     setShowLu(lunch);
      //     setShowDi(dinner);
      //     console.log(showBr);
      //   })
      //   .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, setDay]);
  const daytime: daytimeprops[] = [
    { day: "아침" },
    { day: "점심" },
    { day: "저녁" },
  ];
  const previousDay = (): void => {
    setDay(new Date(day.setDate(day.getDate() - 1)));
  };
  const nextDay = (): void => {
    setDay(new Date(day.setDate(day.getDate() + 1)));
  };
  let index: number = 0;
  return (
    <>
      <Inner>
        <Before onClick={previousDay} />
        <Next onClick={nextDay} />

        <Entire>
          <ul>
            <li className="swiper">
              <div className="niem">
                <Day>{dateString}</Day>
                <Title>{dayName} 식단표</Title>
              </div>
              <Daytimeul>
                {daytime.map((user: daytimeprops) => (
                  <Daytime>{user.day}</Daytime>
                ))}
              </Daytimeul>
              <ul>
                <Sort>
                  {arr.map((user) => (
                    <>
                      <Container>
                        <MealMenu>
                          <MealMenuEl>{user.list}</MealMenuEl>
                        </MealMenu>
                      </Container>
                    </>
                  ))}
                </Sort>
              </ul>
              <ul>
                <Sort>
                  {IsLogin ? (
                    <>
                      {showMenu.map((user: mealProps) => (
                        <>
                          <Container>
                            <MealMenu>
                              {user.DDISH_NM.replace(/[0-9]/g, "")
                                .replace(/\./g, "")
                                .split("<br/>")
                                .map((line: string) => {
                                  return (
                                    <MealMenuEl key={index++}>
                                      {line.replace(/\(\)/g, "")}
                                      <br />
                                    </MealMenuEl>
                                  );
                                })}
                            </MealMenu>
                          </Container>
                        </>
                      ))}
                      {/* <Container>
                        <MealMenu>
                          {showBr.map((line: any) => {
                            return (
                              <MealMenuEl>
                                {line}
                                <br />
                              </MealMenuEl>
                            );
                          })}
                        </MealMenu>
                      </Container>
                      <Container>
                        <MealMenu>
                          {showLu.map((line: any) => {
                            return (
                              <MealMenuEl>
                                {line}
                                <br />
                              </MealMenuEl>
                            );
                          })}
                        </MealMenu>
                      </Container>
                      <Container>
                        <MealMenu>
                          {showDi.map((line: any) => {
                            return (
                              <MealMenuEl>
                                {line}
                                <br />
                              </MealMenuEl>
                            );
                          })}
                        </MealMenu>
                      </Container> */}
                    </>
                  ) : (
                    <></>
                  )}
                </Sort>
              </ul>
            </li>
          </ul>
        </Entire>
      </Inner>
    </>
  );
}
