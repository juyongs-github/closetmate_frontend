import camera from "../../assets/home/camera.png";
import style from "../../assets/home/style.png";
import codi from "../../assets/home/codi.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function GuestHome() {
  return (
    <div className="pt-20">
      <section className="flex justify-center p-36 bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 text-balance sm:text-3xl">
            나만의 스타일을 찾아보세요.
          </h1>
          <p className="mt-8 text-lg font-semibold text-gray-500 text-pretty sm:text-xl/8">
            AI가 당신의 스타일에 맞는 완벽한 코디를 추천해드립니다.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              component={Link}
              to="/login"
              endIcon="→"
            >
              코디 추천 받기
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-[#FFF7ED]">
        <div className="my-[5rem]">
          <h1 className="text-3xl font-semibold tracking-tight text-center text-gray-900 sm:text-3xl">
            간단한 3단계
          </h1>
          <div>
            <div className="flex justify-between items-center w-[50rem] mt-[7rem]">
              <div className="flex flex-col justify-center h-[10rem]">
                <h2 className="text-2xl font-semibold">1</h2>
                <h2 className="text-2xl font-semibold">옷장 등록</h2>
                <p className="mt-3">
                  보유한 의류를 촬영하여 옷장에 등록하세요!
                </p>
              </div>
              <div className="w-[15rem] h-[15rem] bg-gradient-to-br from-pink-100 via-coral-50 to-sky-100 rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                <img className="w-[7rem] h-[7rem]" src={camera} alt="camera" />
              </div>
            </div>
            <div className="flex justify-between items-center w-[50rem] mt-[7rem]">
              <div className="w-[15rem] h-[15rem] bg-gradient-to-br from-pink-100 via-coral-50 to-sky-100 rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                <img className="w-[7rem] h-[7rem]" src={style} alt="style" />
              </div>
              <div className="flex flex-col justify-center h-[10rem]">
                <h2 className="text-2xl font-semibold">2</h2>
                <h2 className="text-2xl font-semibold">스타일 분석</h2>
                <p className="mt-3">
                  AI가 당신의 퍼스널 컬러, 체형, 선호 스타일을 분석합니다.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-[50rem] mt-[7rem]">
              <div className="flex flex-col justify-center h-[10rem]">
                <h2 className="text-2xl font-semibold">3</h2>
                <h2 className="text-2xl font-semibold">코디 추천</h2>
                <p className="mt-3">
                  날씨, 일정, 기분에 맞는 완벽한 코디를 받아 보세요.
                </p>
              </div>
              <div className="w-[15rem] h-[15rem] bg-gradient-to-br from-pink-100 via-coral-50 to-sky-100 rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                <img className="w-[7rem] h-[7rem]" src={codi} alt="codi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuestHome;
