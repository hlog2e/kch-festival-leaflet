import styles from "../styles/Home.module.css";
import Lottie from "react-lottie";
import congratLottie from "../lotties/congrat.json";
import scrollLottie from "../lotties/scroll.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.max_box}>
        <div className="w-44 h-44 bg-amber-200 rounded-[50%] fixed -top-20 -right-20" />
        <div className="w-44 h-44 bg-pink-200 rounded-[50%] fixed -bottom-28 -left-20" />
        <div className="w-44 h-44 bg-blue-200 rounded-[50%] fixed top-[500px] -right-32" />
        <div className="flex p-4">
          <img width="40px" height="40px" src="/favicon.ico" />
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
          <div className="flex mt-2 flex-col items-center">
            <p className="text-md font-pura">제 32회</p>
            <p className="text-xl font-pura -mt-1">금천고등학교</p>
          </div>

          <p className="text-5xl mt-8 font-bold font-pura text-amber-300 from-[#D2AC47] to-[#F7EF8A] bg-gradient-to-r text-transparent bg-clip-text">
            금나리 축제
          </p>
          <p className="font-pura mt-2">2022년 12월 28일</p>

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
    </div>
  );
}
