import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import profile from "../../assets/header/profile.png";

function SummarySection() {
  return (
    <section className="flex p-10 bg-white md:p-12 rounded-2xl">
      <div className="flex flex-col items-center justify-between w-full gap-12 md:gap-16">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={profile} alt="profile" className="w-[2.5rem] md:w-[3rem]" />
          <h1 className="text-xl font-bold tracking-tight md:text-2xl">
            내 프로필
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between w-full md:flex-row gap-7">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-7">
            <PersonIcon
              sx={{
                width: {
                  xs: "6.5rem",
                  md: "10rem",
                },
                height: {
                  xs: "6.5rem",
                  md: "10rem",
                },
                p: 2,
                backgroundColor: "yellow",
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 50,
              }}
            />
            <div className="flex flex-col items-center gap-1 md:items-start md:gap-3">
              <h2 className="text-lg font-bold md:text-xl">홍길동</h2>
              <p className="text-base font-semibold md:text-lg">
                abc@otbu.co.kr
              </p>
              <p className="text-sm md:text-base line-clamp-1">
                패션을 좋아하는 20대 직장인
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              sx={{
                width: "10rem",
                height: {
                  xs: "2.5rem",
                  md: "3.5rem",
                },
                minWidth: "auto",
                backgroundColor: "cyan",
                borderRadius: 50,
              }}
            >
              <span>프로필 수정</span>
            </Button>
            <Button
              variant="contained"
              startIcon={<ExitToAppIcon />}
              sx={{
                width: "10rem",
                height: {
                  xs: "2.5rem",
                  md: "3.5rem",
                },
                backgroundColor: "red",
                borderRadius: 50,
              }}
            >
              <span>탈퇴하기</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
