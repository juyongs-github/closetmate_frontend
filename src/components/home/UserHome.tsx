import { Link } from "react-router-dom";
import weather_sample from "../../assets/home/weather_sample.png";
import item_sample from "../../assets/home/item_sample.png";
import { Button } from "@mui/material";
import Section from "./Section";
import Card from "../ui/Card";

function UserHome() {
  const weather = {
    temperature: -10,
    description: "부분적으로 맑음",
  };

  const myClosetItems = [
    { id: 1, title: "고양이 맨투맨" },
    { id: 2, title: "무지 반팔티" },
    { id: 3, title: "돌청 스키니진" },
    { id: 4, title: "스니커즈" },
  ];

  const myFavoriteCodis = [
    { id: 1, title: "데일리 룩" },
    { id: 2, title: "오피스 룩" },
    { id: 3, title: "데이트 룩" },
  ];

  return (
    <div className="pt-20">
      <div className="flex justify-between">
        <section className="flex flex-col justify-center w-3/5 p-20 mt-20 ml-20 mr-5 shadow-xl rounded-2xl bg-cyan-200">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 text-balance sm:text-3xl">
            안녕하세요, 홍길동님!
          </h1>
          <p className="mt-8 text-lg font-semibold text-gray-500 text-pretty sm:text-xl/8">
            뭐 입을지 고민이세요? <br />
            오늘의 맞춤 코디를 입어보세요!
          </p>
          <div className="flex items-center mt-10 gap-x-6">
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
        </section>
        <section className="flex flex-col justify-center w-2/5 p-20 mt-20 ml-5 mr-20 bg-yellow-200 shadow-xl rounded-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 text-balance sm:text-2xl">
            오늘 날씨
          </h1>
          <div className="flex items-center mt-8">
            <img
              className="w-[10rem] h-[10rem] flex-shrink-0"
              src={weather_sample}
              alt="weather"
            />
            <div className="flex flex-col ml-10 font-semibold">
              <p className="text-3xl">
                {weather.temperature}
                <span>℃</span>
              </p>
              <p className="mt-3">{weather.description}</p>
            </div>
          </div>
        </section>
      </div>
      <Section title="내 옷장" link="/closet">
        {myClosetItems.map((item) => (
          <Card src={item_sample} title={item.title} />
        ))}
      </Section>
      <Section title="최근 코디" link="/latest">
        <p className="text-gray-500">최근 본 코디가 없습니다.</p>
      </Section>
      <Section title="저장 코디" link="/favorite">
        {myFavoriteCodis.map((item) => (
          <Card src={item_sample} title={item.title} />
        ))}
      </Section>
    </div>
  );
}

export default UserHome;
