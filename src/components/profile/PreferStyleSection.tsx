import { IoShirtOutline } from "react-icons/io5";
import { useResponsive } from "../../hooks/useResponsive";
import { Box, Tooltip } from "@mui/material";

function PreferStyleSection() {
  const { mobile, tablet } = useResponsive();
  const styles: string[] = ["데일리", "오피스", "캐주얼", "스포티"];

  return (
    <section className="flex flex-col gap-8 p-10 bg-white md:gap-12 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <IoShirtOutline
          style={{
            width: mobile || tablet ? "2rem" : "2.5rem",
            height: mobile || tablet ? "2rem" : "2.5rem",
          }}
        />
        <h2 className="text-xl font-bold tracking-tight md:text-2xl text-nowrap">
          선호 스타일
        </h2>
      </div>
      <div className="grid items-center grid-cols-2 gap-5 sm:grid-cols-3">
        {styles.map((style) => (
          <Tooltip title={style}>
            <Box className="p-5 text-sm font-bold text-center text-white bg-purple-600 md:text-base rounded-xl">
              <div className="w-full line-clamp-1">{style}</div>
            </Box>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

export default PreferStyleSection;
