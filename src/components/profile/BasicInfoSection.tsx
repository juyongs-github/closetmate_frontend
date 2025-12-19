import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function BasicInfoSection() {
  return (
    <section className="flex flex-col gap-12 p-10 bg-white md:gap-16 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <InfoOutlinedIcon
          sx={{
            width: {
              xs: "2rem",
              md: "2.5rem",
            },
            height: {
              xs: "2rem",
              md: "2.5rem",
            },
          }}
        />
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">
          기본 정보
        </h2>
      </div>
      <div className="grid items-center min-w-0 grid-cols-2 gap-x-20 gap-y-7 md:gap-y-10 text-nowrap">
        <p className="text-lg font-bold md:text-xl">생년월일</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          2000.01.01
        </p>
        <p className="text-lg font-bold md:text-xl">성별</p>
        <p className="text-lg tracking-wide text-right font md:text-xl">남</p>
        <p className="text-lg font-bold md:text-xl">휴대폰번호</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          010-1234-5678
        </p>
        <p className="text-lg font-bold md:text-xl">키</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          178<span className="ml-1">cm</span>
        </p>
        <p className="text-lg font-bold md:text-xl">체중</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          80<span className="ml-1">kg</span>
        </p>
        <p className="text-lg font-bold md:text-xl">체형</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          보통
        </p>
      </div>
    </section>
  );
}

export default BasicInfoSection;
