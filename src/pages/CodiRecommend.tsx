import { Button, Divider, IconButton, Tooltip } from "@mui/material";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GrPowerReset } from "react-icons/gr";
import ListItem from "../components/ui/ListItem";
import Footer from "../layout/Footer";
import item_sample from "../assets/home/item_sample.png";
import { useState } from "react";

interface RecommendCodiInfo {
  title: string;
  reason: string[];
}

interface RecommendCodiItems {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

const recommendCodiInfo: RecommendCodiInfo = {
  title: "비즈니스 캐주얼 코디",
  reason: [
    "블랙과 그레이의 조화로 세련된 느낌",
    "오늘 날씨(맑음)에 적합한 레이어링",
    "비즈니스 캐주얼에 완벽한 조합",
    "당신의 퍼스널 컬러와 95% 매칭",
  ],
};

const recomeendCodiItems: RecommendCodiItems[] = [
  {
    id: 1,
    image: item_sample,
    category: "데일리",
    title: "고양이 맨투맨",
    color: "#ffffff",
    size: "XL",
    season: "사계절",
    details: "",
  },
  {
    id: 2,
    image: item_sample,
    category: "오피스",
    title: "무지 반팔티",
    color: "#aaaaaa",
    size: "L",
    season: "여름",
    details: "",
  },
  {
    id: 3,
    image: item_sample,
    category: "스포츠",
    title: "돌청 스키니진",
    color: "#000000",
    size: "M",
    season: "가을",
    details: "",
  },
  {
    id: 4,
    image: "",
    category: "데이트",
    title: "스니커즈",
    color: "#bbbbbb",
    size: "250",
    season: "사계절",
    details: "",
  },
];

function CodiRecommend() {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const [isFavorite, setFavorite] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center p-5 bg-gray-100 md:p-10">
        <div className="flex flex-col w-full gap-10 mt-20 bg-white shadow-md p-7 md:p-12 md:mt-24 rounded-3xl">
          <div className="flex w-full">
            <Tooltip title="뒤로가기">
              <IconButton onClick={goPrevPage}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-lg font-bold tracking-tighter md:tracking-normal md:text-xl">
                AI 추천 코디
              </h1>
            </div>
          </div>
          <section className="flex flex-col items-center justify-center gap-10 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-7">
            <div className="flex flex-col w-full gap-5 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="relative w-full overflow-hidden bg-white shadow-md rounded-2xl aspect-[1]">
                  <img
                    src={item_sample}
                    alt="codi_recommend"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5 bg-orange-100 shadow-md md:w-1/2 rounded-2xl p-7">
                <div className="flex flex-col items-center gap-1 text-amber-700 ">
                  <CheckroomIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <span className="text-base font-bold tracking-tight text-center md:text-lg">
                    {recommendCodiInfo.title}
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col items-center gap-1 text-indigo-700">
                    <CheckIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
                    <span className="text-sm font-bold md:text-base">
                      왜 이 조합인가요?
                    </span>
                  </div>
                  <ul className="space-y-3 text-xs list-disc list-inside md:text-sm">
                    {recommendCodiInfo.reason.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Divider sx={{ width: "100%" }} />
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              <Button
                variant="contained"
                startIcon={
                  isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
                sx={{
                  width: "100%",
                  height: "3.5rem",
                  backgroundColor: "#ff1493",
                }}
                onClick={() => setFavorite(!isFavorite)}
              >
                저장하기
              </Button>
              <Button
                variant="contained"
                startIcon={<GrPowerReset />}
                sx={{ width: "100%", height: "3.5rem" }}
              >
                다시 추천 받기
              </Button>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center bg-purple-100 shadow-xl gap-7 rounded-2xl p-7">
            <p className="text-lg font-bold">코디 아이템</p>
            {recomeendCodiItems.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CodiRecommend;
