import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ErrorIcon from "@mui/icons-material/Error";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ViewModeToggleButton from "../components/ui/ViewModeToggleButton";
import CategoryToggleButton from "../components/ui/CategoryToggleButton";
import CardItem from "../components/ui/CardItem";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import ListItem from "../components/ui/ListItem";
import item_sample from "../assets/home/item_sample.png";
import { setCategory } from "../store/slices/categorySlice";
import { useState, type SyntheticEvent } from "react";
import { SITUATION_CATEGORYS, type SituationCategory } from "../types/codi";

interface LastCodiItems {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

const lastCodiItems: LastCodiItems[] = [
  {
    id: 1,
    image: item_sample,
    category: "데일리",
    title: "꾸안꾸 데일리 룩",
    color: "#ffffff",
    size: "XL",
    season: "사계절",
    details: "",
  },
  {
    id: 2,
    image: item_sample,
    category: "오피스",
    title: "오피스 캐주얼 코디",
    color: "#aaaaaa",
    size: "L",
    season: "여름",
    details: "",
  },
  {
    id: 3,
    image: item_sample,
    category: "스포츠",
    title: "편한 운동 룩",
    color: "#000000",
    size: "M",
    season: "가을",
    details: "",
  },
  {
    id: 4,
    image: "",
    category: "데이트",
    title: "깔끔 남친 룩",
    color: "#bbbbbb",
    size: "250mm",
    season: "사계절",
    details: "",
  },
];

function LatestCodi() {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const dispatch = useDispatch<AppDispatch>();
  const viewMode = useSelector((state: RootState) => state.viewMode.mode);
  const situation = useSelector((state: RootState) => state.category.situation);

  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredItems = lastCodiItems.filter((item: LastCodiItems) => {
    const categoryMatch = situation === "전체" || item.category === situation;
    const searchMatch =
      searchValue.length === 0 ||
      item.title.toLowerCase().includes(searchValue.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center p-5 bg-gray-100 md:p-10">
        <div className="flex flex-col w-full mt-20 bg-white shadow-md gap-7 p-7 md:p-12 md:mt-24 rounded-3xl">
          <div className="flex w-full">
            <Tooltip title="뒤로가기">
              <IconButton onClick={goPrevPage}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-lg font-bold tracking-tighter md:tracking-normal md:text-xl">
                최근 코디
              </h1>
            </div>
            <Tooltip title="코디 추천 받기">
              <IconButton
                component={Link}
                to="/codi-recommend"
                sx={{
                  backgroundColor: "darkviolet",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "purple",
                  },
                }}
              >
                <CheckroomIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Autocomplete
                freeSolo
                clearOnBlur={false}
                open={open && searchValue.length > 0}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                onInputChange={(event: SyntheticEvent, value: string) =>
                  setSearchValue(value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setOpen(false);
                  }
                }}
                options={lastCodiItems.map((item) => item.title)}
                sx={{
                  width: "100%",
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="검색"
                    size="small"
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ position: "absolute", right: 20 }}
                          >
                            <IconButton
                              edge="end"
                              onClick={() => setOpen(false)}
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
              <ViewModeToggleButton />
            </div>
            <CategoryToggleButton
              category={SITUATION_CATEGORYS}
              alignment={situation}
              onChange={(value) => {
                dispatch(
                  setCategory({
                    key: "situation",
                    value: value as SituationCategory,
                  })
                );
              }}
            />
          </div>
          {filteredItems.length > 0 ? (
            viewMode === "card" ? (
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
                {filteredItems.map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {filteredItems.map((item) => (
                  <ListItem key={item.id} item={item} />
                ))}
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-20">
              <ErrorIcon sx={{ fontSize: 40, color: "gray" }} />
              <p className="font-semibold text-gray-500">
                해당 코디가 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LatestCodi;
