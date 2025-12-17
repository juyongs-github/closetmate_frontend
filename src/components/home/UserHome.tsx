import { Link } from "react-router-dom";
import weather_sample from "../../assets/home/weather_sample.png";
import item_sample from "../../assets/home/item_sample.png";
import { Button, useMediaQuery } from "@mui/material";
import Section from "./Section";
import Card from "../ui/Card";

interface Weather {
  temperature: number;
  description: string;
}

interface MyClosetItems {
  id: number;
  title: string;
}

interface CodiHistorys {
  id: number;
  title: string;
}

interface MyFavoriteCodis {
  id: number;
  title: string;
}

function UserHome() {
  const mobile = useMediaQuery("(max-width:640px)");
  const tablet = useMediaQuery("(max-width:768px)");

  const weather: Weather = {
    temperature: -10,
    description: "부분적으로 맑음",
  };

  const myClosetItems: MyClosetItems[] = [
    { id: 1, title: "고양이 맨투맨" },
    { id: 2, title: "무지 반팔티" },
    { id: 3, title: "돌청 스키니진" },
    { id: 4, title: "스니커즈" },
  ];

  const codiHistorys: CodiHistorys[] = [];

  const myFavoriteCodis: MyFavoriteCodis[] = [
    { id: 1, title: "데일리 룩" },
    { id: 2, title: "오피스 룩" },
    { id: 3, title: "데이트 룩" },
  ];

  return (
    <div className="pt-20">
      <div className="sm:flex sm:justify-between">
        <section className="flex flex-col justify-center gap-5 m-10 shadow-xl p-7 sm:mt-20 sm:ml-20 sm:mr-5 sm:mb-0 sm:p-10 sm:gap-7 md:p-14 md:gap-10 sm:flex-[3] rounded-2xl bg-cyan-200">
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
        <section className="flex flex-col justify-center gap-5 m-10 bg-yellow-200 shadow-xl p-7 sm:mt-20 sm:ml-5 sm:mr-20 sm:mb-0 sm:p-10 sm:gap-7 md:p-14 md:gap-10 sm:flex-[2.5] rounded-2xl">
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
      <Section title="내 옷장" link="/closet">
        {myClosetItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {myClosetItems.map((item) => (
              <Card src={item_sample} title={item.title} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-sm">
            등록한 아이템이 없습니다.
          </p>
        )}
      </Section>
      <Section title="최근 코디" link="/latest">
        {codiHistorys.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {codiHistorys.map((item) => (
              <Card src={item_sample} title={item.title} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 sm:text-sm">
            최근 코디가 없습니다.
          </p>
        )}
      </Section>
      <Section title="저장 코디" link="/favorite">
        {myFavoriteCodis.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {myFavoriteCodis.map((item) => (
              <Card src={item_sample} title={item.title} />
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
