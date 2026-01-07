import { Link } from "react-router-dom";
import weather_sample from "../../assets/home/weather_sample.png";
import item_sample from "../../assets/home/item_sample.png";
import { Button } from "@mui/material";
import Section from "./Section";
import CardItem from "../ui/CardItem";
import { useResponsive } from "../../hooks/useResponsive";

interface Weather {
  temperature: number;
  description: string;
}

interface MyClosetItems {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

interface CodiHistorys {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

interface MyFavoriteCodis {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

function UserHome() {
  const { mobile, tablet } = useResponsive();

  const weather: Weather = {
    temperature: -10,
    description: "부분적으로 맑음",
  };

  const myClosetItems: MyClosetItems[] = [
    {
      id: 1,
      image: item_sample,
      category: "상의",
      title: "고양이 맨투맨",
      color: "#ffffff",
      size: "XL",
      season: "사계절",
      details: "",
    },
    {
      id: 2,
      image: item_sample,
      category: "상의",
      title: "무지 반팔티",
      color: "#aaaaaa",
      size: "L",
      season: "여름",
      details: "",
    },
    {
      id: 3,
      image: item_sample,
      category: "하의",
      title: "돌청 스키니진",
      color: "#000000",
      size: "M",
      season: "가을",
      details: "",
    },
    {
      id: 4,
      image: "",
      category: "신발",
      title: "스니커즈",
      color: "#bbbbbb",
      size: "250",
      season: "사계절",
      details: "",
    },
  ];

  const codiHistorys: CodiHistorys[] = [];

  const myFavoriteCodis: MyFavoriteCodis[] = [];

  return (
    <div className="pt-20">
      <div className="md:flex md:justify-between">
        <section className="flex flex-col justify-center gap-5 m-10 shadow-xl p-7 md:mt-20 md:ml-20 md:mr-5 md:mb-0 sm:p-10 sm:gap-7 md:p-14 md:gap-10 sm:flex-[1] rounded-2xl bg-cyan-200">
          <h1 className="text-lg font-semibold tracking-tight text-gray-900 text-balance sm:text-xl md:text-2xl">
            안녕하세요, 홍길동님!
          </h1>
          <p className="text-xs font-semibold text-gray-500 text-pretty sm:text-sm md:text-lg">
            뭐 입을지 고민이세요? <br />
            오늘의 맞춤 코디를 입어보세요!
          </p>
          <div className="flex items-center">
            <Button
              variant="contained"
              size={mobile || tablet ? "small" : "large"}
              color="secondary"
              component={Link}
              to="/login"
              endIcon="→"
            >
              코디 추천 받기
            </Button>
          </div>
        </section>
        <section className="flex flex-col justify-center gap-5 m-10 bg-yellow-200 shadow-xl p-7 md:mt-20 md:ml-5 md:mr-20 md:mb-0 sm:p-10 sm:gap-7 md:p-14 md:gap-10 sm:flex-[1] rounded-2xl">
          <h1 className="text-lg font-semibold tracking-tight text-gray-900 text-balance sm:text-xl md:text-2xl">
            오늘 날씨
          </h1>
          <div className="flex items-center gap-5 md:gap-7">
            <img
              className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem]"
              src={weather_sample}
              alt="weather"
            />
            <div className="flex flex-col gap-1 font-semibold sm:gap-2">
              <p className="text-xl sm:text-2xl md:text-3xl">
                {weather.temperature}
                <span>℃</span>
              </p>
              <p className="text-xs sm:text-xs md:text-base">
                {weather.description}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Section title="내 옷장" link="/mycloset">
        {myClosetItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
            {myClosetItems.map((item) => (
              <CardItem item={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-sm">
            등록한 아이템이 없습니다.
          </p>
        )}
      </Section>
      <Section title="최근 코디" link="/codi-latest">
        {codiHistorys.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 md:gap-7 md:grid-cols-3">
            {codiHistorys.map((item) => (
              <CardItem item={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-sm">
            최근 코디가 없습니다.
          </p>
        )}
      </Section>
      <Section title="저장 코디" link="/codi-favorite">
        {myFavoriteCodis.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
            {myFavoriteCodis.map((item) => (
              <CardItem item={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-sm">
            저장한 코디가 없습니다.
          </p>
        )}
      </Section>
    </div>
  );
}

export default UserHome;
