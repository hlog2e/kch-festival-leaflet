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
          <div className={"flex  font-medium text-lg flex-col"}>
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
          <div className={"flex  font-medium text-lg flex-col"}>
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
