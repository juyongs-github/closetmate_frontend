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
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ViewModeToggleButton from "../components/ui/ViewModeToggleButton";
import CategoryToggleButton from "../components/ui/CategoryToggleButton";
import CardItem from "../components/ui/CardItem";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import ListItem from "../components/ui/ListItem";
import item_sample from "../assets/home/item_sample.png";
import { CLOSET_CATEGORYS, type ClosetCategory } from "../types/closet";
import { setCategory } from "../store/slices/categorySlice";
import { useState, type SyntheticEvent } from "react";

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

function MyCloset() {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const dispatch = useDispatch<AppDispatch>();
  const viewMode = useSelector((state: RootState) => state.viewMode.mode);
  const closet = useSelector((state: RootState) => state.category.closet);

  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredItems = myClosetItems.filter((item: MyClosetItems) => {
    const categoryMatch = closet === "전체" || item.category === closet;
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
                내 옷장
              </h1>
            </div>
            <Tooltip title="옷 등록">
              <IconButton component={Link} to="/closetitem-add">
                <AddIcon />
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
                options={myClosetItems.map((item) => item.title)}
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
              category={CLOSET_CATEGORYS}
              alignment={closet}
              onChange={(value) => {
                dispatch(
                  setCategory({ key: "closet", value: value as ClosetCategory })
                );
              }}
            />
          </div>
          {viewMode === "card" && (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
              {filteredItems.map((item) => (
                <CardItem key={item.id} item={item} />
              ))}
            </div>
          )}
          {viewMode === "list" && (
            <div className="flex flex-col gap-5">
              {filteredItems.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyCloset;
