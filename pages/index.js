import styles from "../styles/Home.module.css";
import Lottie from "react-lottie";
import congratLottie from "../lotties/congrat.json";
import scrollLottie from "../lotties/scroll.json";
import Fade from "react-reveal/Fade";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>제 32회 금나리축제</title>
        <meta
          name="description"
          content="제 32회 금천고등학교 금나리축제 온라인 리플릿"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="제 32회 금나리축제" />
        <meta
          property="og:description"
          content="제 32회 금천고등학교 금나리축제 온라인 리플릿"
        />
        <meta property="og:url" content="https://festival.kch-app.me" />
        <meta
          property="og:image"
          content="https://festival.kch-app.me/ogimage.png"
        />
      </Head>
      <div className={styles.max_box}>
        <div className="w-44 h-44 bg-amber-200 rounded-[50%] fixed -top-20 -right-20 z-50" />
        <div className="w-44 h-44 bg-pink-200 rounded-[50%] fixed -bottom-28 -left-20 z-50" />
        <div className="w-44 h-44 bg-blue-200 rounded-[50%] fixed top-[500px] -right-36 z-50" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
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
    <div className={"pb-28"}>
      <div className={"p-8"}>
        {/*<Fade left cascade>*/}
        {/*  <p className={"font-pura text-2xl font-semibold "}>인사말</p>*/}
        {/*  <p className="mb-52 mt-4 font-pretendard font-md ">*/}
        {/*    청주교육대학교는 1941년 개교하여 80년 역사를 자랑하는 유서 깊은*/}
        {/*    교원양성기관입니다. 인간사회와 자연에 대한 폭넓은 이해를 바탕으로*/}
        {/*    교양과 인격을 완성하고, 기초학문과 교과교육에 대한 전문적 지식과*/}
        {/*    자질을 갖추고, 국가 발전과 인류공영에 기여할 수 있는 우수한*/}
        {/*    초등교원과 초등교육 전문가 양성을 목적으로 우리 교육의 각 분야에서*/}
        {/*    연구하고 실천하는 뛰어난 교육자들을 양성해 왔습니다. 우리 대학은*/}
        {/*    유서 깊은 전통을 이어가면서 새로운 시대에는 혁신을 지속하기 위하여*/}
        {/*    끊임없이 노력하고 있습니다. 그 일환으로 2015년 3월, 구성원의 지혜를*/}
        {/*    모아 대학, 협력과 연대의 집단 지성을 경험할 수 있는 대학, 사람을*/}
        {/*    성장시키고 연구와 실천을 다른 교육 기관이 모방할 수 있는 매력적인*/}
        {/*    대학으로 성장시켜 가겠습니다.*/}
        {/*  </p>*/}
        {/*</Fade>*/}

        <Fade left>
          <p className={"font-pura text-2xl font-semibold"}>일정</p>
        </Fade>

        {/*여기서 부터 1부 일정*/}
        <Fade left>
          <p className="mt-6 text-xl font-pura">동아리 체험활동</p>
          <div className={"flex  font-medium text-lg flex-col font-pretendard"}>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>09:10 ~ 10:10</p>
              <p className={"ml-2 font-bold"}>1부 체험</p>
            </div>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>10:20 ~ 11:20</p>
              <p className={"ml-2 font-bold"}>2부 체험</p>
            </div>
          </div>
        </Fade>
        {/*여기서부터 2부 일정*/}
        <Fade left>
          <p className="mt-6 text-xl font-pura">쉬는시간</p>
          <div className={"flex  font-medium text-lg flex-col font-pretendard"}>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>11:20 ~ 13:30</p>
              <p className={"ml-2 font-bold"}>급식 및 휴식</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <p className="mt-6 text-xl font-pura">공연</p>
          <div className={"flex  font-medium text-lg flex-col font-pretendard"}>
            <div className={"flex items-center py-1"}>
              <div className="bg-blue-300 h-4 w-4 mx-2 border-2 rounded-3xl" />
              <p>13:30 ~ 16:00</p>
              <p className={"ml-2 font-bold"}>학생들의 무대</p>
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
      place: "물리실, 대기실 (2-1)",
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
      topic: "범인을 잡아랏 !",
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
      <div className="p-8">
        <Fade left>
          <div className="flex justify-between items-center">
            <p className={"font-pura text-2xl font-semibold"}>
              동아리 체험부스
            </p>
            <a
              className="bg-amber-400 rounded-lg p-2 text-xs text-white font-bold"
              href="/school_map.svg"
              target="_blank"
            >
              금천고 안내도
            </a>
          </div>
        </Fade>

        <Fade left>
          <p className="mt-8 text-xl font-pura text-amber-300">
            1부 (09:10 ~ 10:10)
          </p>
        </Fade>
        <Fade left>
          <div className="mt-2 ">
            <div className="flex justify-between items-center mt-2">
              <p className="text-md font-pura">1학년</p>
              <p className="text-red-400 font-pretendard font-bold text-sm">
                ※ 1학년 대기실 : 1-8, 1-9
              </p>
            </div>

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
            <div className="flex justify-between items-center mt-2">
              <p className="text-md font-pura">2학년</p>
              <p className="text-red-400 font-pretendard font-bold text-sm">
                ※ 2학년 대기실 : 2-3, 2-4
              </p>
            </div>
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-md font-pura">1학년</p>
              <p className="text-red-400 font-pretendard font-bold text-sm">
                ※ 1학년 대기실 : 1-8, 1-9
              </p>
            </div>
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-md font-pura">2학년</p>
              <p className="text-red-400 font-pretendard font-bold text-sm">
                ※ 2학년 대기실 : 2-3, 2-4
              </p>
            </div>
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

        <Fade left>
          <p className="mt-8 text-xl font-pura text-pink-300">사전신청 부스</p>
        </Fade>
        <Fade left>
          <div className="mt-2">
            <table className="w-full mt-2 text-center border ">
              <thead>
                <tr className=" h-10 border border-black text-sm font-bold">
                  <th className="w-[20%]  border border-pink-200">동아리명</th>
                  <th className="w-[40%] border border-pink-200">주제</th>
                  <th className="w-[20%] border border-pink-200">장소</th>
                  <th className="w-[20%] border border-pink-200">인원</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs font-md h-9">
                  <td className="border border-pink-200">쿠킹클래스</td>
                  <td className="border border-pink-200 px-1">
                    미니케이크 만들기
                  </td>
                  <td className="border border-pink-200 ">금빛마루</td>
                  <td className="border border-pink-200 px-1">사전신청</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Fade>
      </div>
    </div>
  );
}

function Section4() {
  const data = [
    {
      type: "밴드",
      people: "쌤밴드",
      song: "비와 당신 외 1곡",
    },
    {
      type: "밴드",
      people: "하게타 동아리",
      song: "나는 나비 외 1곡",
    },
    {
      type: "찬조",
      people: "본교 졸업생 알리온",
      song: "il mio cuore va (타이타닉 ost)",
    },
    {
      type: "댄스",
      people: "박세민 외 3명",
      song: "Kill this love",
    },
    {
      type: "중창",
      people: "강원호 외 8명",
      song: "함께 걷는 길 외 1곡",
    },
    {
      type: "노래",
      people: "???",
      song: "???",
    },
    {
      type: "노래",
      people: "주수빈 외 1명",
      song: "우연히, 봄",
    },
    {
      oneRow: true,
      title: "e-스포츠",
    },
    {
      type: "피아노",
      people: "신은혁",
      song: "L. v. Beethoven – Piano Sonata No.14 “Moonlight”",
    },
    {
      type: "피아노",
      people: "오주혜 외 1명",
      song: 'L. v. Beethoven : Piano Sonata No.23\n"Appassionata ',
    },
    {
      type: "랩",
      people: "오준서",
      song: "WU 외 1곡",
    },
    {
      type: "노래",
      people: "홍다율",
      song: "한숨",
    },
    {
      type: "댄스",
      people: "박장균 외 7명",
      song: "RightNow",
    },
    {
      type: "노래",
      people: "윤태하",
      song: "안녕",
    },
    {
      type: "댄스",
      people: "류동하 외 6명",
      song: "bloodline 외 4곡",
    },
    {
      oneRow: true,
      title: "히든 티쳐!(숨겨진 선생님을 찾아라) & 스폐셜 무대",
    },
    {
      type: "댄스",
      people: "학생회 무대",
      song: "풍선 외 1곡",
    },
  ];
  return (
    <div className="h-screen mt-24 mb-16">
      <div className="p-8">
        <Fade left>
          <p className={"font-pura text-2xl font-semibold"}>공연순서</p>
        </Fade>

        <Fade left>
          <div className="mt-4">
            <table className="w-full mt-2 text-center border ">
              <thead>
                <tr className=" h-10 border border-black text-sm font-bold">
                  <th className="w-[10%] border border-orange-200">구분</th>
                  <th className="w-[25%] border border-orange-200">출연진</th>
                  <th className="w-[40%] border border-orange-200">노래</th>
                </tr>
              </thead>
              <tbody>
                {data.map((_item) => {
                  if (!_item.oneRow) {
                    return (
                      <tr className="text-xs font-md h-9">
                        <td className="border border-orange-200 px-1">
                          {_item.type}
                        </td>
                        <td className="border border-orange-200 ">
                          {_item.people}
                        </td>
                        <td className="border border-orange-200 px-1">
                          {_item.song}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr className="text-xs font-bold h-9">
                        <td
                          colSpan="3"
                          className="border-x border-orange-200 px-1"
                        >
                          {_item.title}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </Fade>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full px-10 pb-24 text-slate-400">
      <div className="flex justify-end">
        <p className="text-xs ">Developed by </p>
        <a
          href="https://github.com/hlog2e"
          className="font-bold ml-1 text-xs underline"
        >
          HongRok Kim
        </a>
      </div>
      <div className="w-full border-t border-slate-300 mt-1">
        <p className="text-xs mt-2">
          Copyright Ⓒ 2022 KEUMCHEON High School All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
