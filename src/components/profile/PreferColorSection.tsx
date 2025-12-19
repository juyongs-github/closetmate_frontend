import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { Box, Tooltip } from "@mui/material";

function PreferColorSection() {
  const colors: string[] = ["#ffffff", "#000000", "#aaaaaa", "#abcdef"];

  return (
    <section className="flex flex-col gap-8 p-10 bg-white md:gap-12 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <ColorLensOutlinedIcon
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
          선호 색상
        </h2>
      </div>
      <div className="grid flex-wrap items-center grid-cols-3 gap-5 sm:grid-cols-4">
        {colors.map((color) => (
          <Tooltip title={color}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: color,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 5,
              }}
            />
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

export default PreferColorSection;
