import styles from "../styles/Home.module.css";
import Lottie from "react-lottie";
import congratLottie from "../lotties/congrat.json";
import scrollLottie from "../lotties/scroll.json";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.max_box}>
        <div className="w-44 h-44 bg-amber-200 rounded-[50%] fixed -top-20 -right-20 z-50" />
        <div className="w-44 h-44 bg-pink-200 rounded-[50%] fixed -bottom-28 -left-20 z-50" />
        <div className="w-44 h-44 bg-blue-200 rounded-[50%] fixed top-[500px] -right-32 z-50" />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-screen">
      <div className="flex p-4">
        <Fade left>
          <img width="40px" height="40px" src="/favicon.ico" />
        </Fade>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className=" w-full absolute -top-4">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: congratLottie,
            }}
          />
        </div>
        <Fade top>
          <div className="flex mt-2 flex-col items-center">
            <p className="text-md font-pura">제 32회</p>
            <p className="text-xl font-pura -mt-1">금천고등학교</p>
          </div>
        </Fade>

        <Fade bottom>
          <p className="text-5xl mt-8 font-bold font-pura text-amber-300 from-[#D2AC47] to-[#F7EF8A] bg-gradient-to-r text-transparent bg-clip-text">
            금나리 축제
          </p>
        </Fade>
        <Fade bottom cascade>
          <p className="font-pura mt-2">2022년 12월 28일</p>
        </Fade>

        <div className="mt-36">
          <Lottie
            height="200px"
            options={{
              loop: true,
              autoplay: true,
              animationData: scrollLottie,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className={"h-screen"}>
      <div className={"p-12"}>
        <Fade left>
          <p className={"font-pura text-2xl font-semibold"}>일정</p>
        </Fade>

        {/*여기서 부터 1부 일정*/}
        <Fade left>
          <p className="mt-6 text-xl font-pura">1부</p>
          <div className={"flex  font-medium text-lg flex-col font-pretendard"}>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
          </div>
        </Fade>
        {/*여기서부터 2부 일정*/}
        <Fade left>
          <p className="mt-6 text-xl font-pura">2부</p>
          <div className={"flex  font-medium text-lg flex-col font-pretendard"}>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>12:20 ~ 1:20</p>
              <p className={"ml-2 font-bold"}>개회식</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

function Section3() {
  const data1 = [
    {
      name: "PIG",
      topic: "VR, 펌프, 철권, 펠티어 냉장고",
      place: "물리실",
      person: "∞",
    },
    {
      name: "MBC 1팀",
      topic: "유기농 립밤 만들기",
      place: "화학실",
      person: "15",
    },
    {
      name: "MBC 2팀",
      topic: "나만의 향수 만들기",
      place: "1-2",
      person: "15",
    },
    {
      name: "QS",
      topic: "비밀번호 해독",
      place: "생명과학실",
      person: "15",
    },
    {
      name: "카본",
      topic: "입욕제 만들기",
      place: "지구과학실",
      person: "15",
    },
    {
      name: "델타",
      topic: "나만의 워터키링 만들기",
      place: "1-4",
      person: "15",
    },
    {
      name: "델타",
      topic: "천연 졸음방지제 만들기",
      place: "1-5",
      person: "15",
    },
    {
      name: "지피에스",
      topic: "셀프사진관",
      place: "1-3",
      person: "25",
    },
    {
      name: "무궁화",
      topic: "방탈출체험",
      place: "2-5",
      person: "팀당 4명",
    },
    {
      name: "국제연합",
      topic: "도전 40분 줄줄이 달려요!",
      place: "어학실",
      person: "25",
    },
    {
      name: "심리연구소",
      topic: "타로체험",
      place: "2-7",
      person: "25",
    },
    {
      name: "창작미술반",
      topic: "핸드폰 비즈 스트랩 만들기",
      place: "미술실",
      person: "25",
    },
  ];

  const data2 = [
    {
      name: "진로나침반",
      topic: "소원달기, 익명편지 배달, 포토존",
      place: "진로활동실",
      person: "25",
    },
    {
      name: "리미트",
      topic: "타임 리미트",
      place: "1-1",
      person: "25",
    },
    {
      name: "온에어",
      topic: "도전! K-예능 게임 릴레이",
      place: "1-6",
      person: "25",
    },
    {
      name: "모의유엔",
      topic: "보물찾기식 유엔 퀴즈 맞추기",
      place: "1-7",
      person: "25",
    },
    {
      name: "건축동아리",
      topic: "과자집 만들기",
      place: "2-2",
      person: "25",
    },
    {
      name: "엘사",
      topic: "멸종위기동물 키링 만들기",
      place: "2-6",
      person: "25",
    },
    {
      name: "그린랜턴 1",
      topic: "친환경퀴즈 맞히기",
      place: "2-9",
      person: "25",
    },
    {
      name: "그린랜턴 2",
      topic: "비건 떡볶이 시식(별도비용-추후 기부)",
      place: "2-8",
      person: "25",
    },
    {
      name: "유클리드",
      topic: "스피드 문제풀이 게임",
      place: "수학교과실",
      person: "25",
    },
    {
      name: "금빛나래",
      topic: "모의주식 체험",
      place: "사회교과실",
      person: "25",
    },
  ];
  return (
    <div className="">
      <div className="p-12">
        <Fade left>
          <p className={"font-pura text-2xl font-semibold"}>동아리 체험부스</p>
        </Fade>

        <Fade left>
          <p className="mt-8 text-xl font-pura text-amber-300">
            1부 (09:10 ~ 10:10)
          </p>
        </Fade>
        <Fade left>
          <div className="mt-2 ">
            <p className="text-md font-pura ">1학년</p>
            <table className="w-full mt-2 text-center border border-amber-200 ">
              <thead>
                <tr className=" h-10 border border-amber-300 text-sm font-bold">
                  <th className="w-[20%]  border border-amber-200">동아리명</th>
                  <th className="w-[40%] border border-amber-200">주제</th>
                  <th className="w-[20%] border border-amber-200">장소</th>
                  <th className="w-[20%] border border-amber-200">인원</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((_item) => {
                  return (
                    <tr className="text-xs font-md h-9">
                      <td className="border border-amber-200">{_item.name}</td>
                      <td className="border border-amber-200 px-1">
                        {_item.topic}
                      </td>
                      <td className="border border-amber-200 ">
                        {_item.place}
                      </td>
                      <td className="border border-amber-200 px-1">
                        {_item.person}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fade>
        <Fade left>
          <div className="mt-2">
            <p className="text-md font-pura ">2학년</p>
            <table className="w-full mt-2 text-center border border-amber-200 ">
              <thead>
                <tr className=" h-10 border border-amber-200 text-sm font-bold">
                  <th className="w-[20%]  border border-amber-200">동아리명</th>
                  <th className="w-[40%] border border-amber-200">주제</th>
                  <th className="w-[20%] border border-amber-200">장소</th>
                  <th className="w-[20%] border border-amber-200">인원</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((_item) => {
                  return (
                    <tr className="text-xs font-md h-9">
                      <td className="border border-amber-200">{_item.name}</td>
                      <td className="border border-amber-200 px-1">
                        {_item.topic}
                      </td>
                      <td className="border border-amber-200 ">
                        {_item.place}
                      </td>
                      <td className="border border-amber-200 px-1">
                        {_item.person}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fade>

        <Fade left>
          <p className="mt-16 text-xl font-pura text-blue-300">
            2부 (10:20 ~ 11:20)
          </p>
        </Fade>
        <Fade left>
          <div className="mt-2">
            <p className="text-md font-pura">1학년</p>
            <table className="w-full mt-2 text-center border  ">
              <thead>
                <tr className=" h-10 border border-black text-sm font-bold">
                  <th className="w-[20%]  border border-blue-200">동아리명</th>
                  <th className="w-[40%] border border-blue-200">주제</th>
                  <th className="w-[20%] border border-blue-200">장소</th>
                  <th className="w-[20%] border border-blue-200">인원</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((_item) => {
                  return (
                    <tr className="text-xs font-md h-9">
                      <td className="border border-blue-200">{_item.name}</td>
                      <td className="border border-blue-200 px-1">
                        {_item.topic}
                      </td>
                      <td className="border border-blue-200 ">{_item.place}</td>
                      <td className="border border-blue-200 px-1">
                        {_item.person}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fade>
        <Fade left>
          <div className="mt-2">
            <p className="text-md font-pura">2학년</p>
            <table className="w-full mt-2 text-center border ">
              <thead>
                <tr className=" h-10 border border-black text-sm font-bold">
                  <th className="w-[20%]  border border-blue-200">동아리명</th>
                  <th className="w-[40%] border border-blue-200">주제</th>
                  <th className="w-[20%] border border-blue-200">장소</th>
                  <th className="w-[20%] border border-blue-200">인원</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((_item) => {
                  return (
                    <tr className="text-xs font-md h-9">
                      <td className="border border-blue-200">{_item.name}</td>
                      <td className="border border-blue-200 px-1">
                        {_item.topic}
                      </td>
                      <td className="border border-blue-200 ">{_item.place}</td>
                      <td className="border border-blue-200 px-1">
                        {_item.person}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fade>
      </div>
    </div>
  );
}
