import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { IoShirtOutline } from "react-icons/io5";
import { useResponsive } from "../../hooks/useResponsive";
import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import type { ProfileSectionProps } from "../../types/profile";
import React from "react";

function PreferStyleSection({ isEdit }: Pick<ProfileSectionProps, "isEdit">) {
  const { mobile, tablet } = useResponsive();

  const [alignment, setAlignment] = React.useState<string[]>([]);
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string[]
  ) => {
    setAlignment(newAlignment);
  };

  const selectedStyles: string[] = ["데일리", "오피스", "캐주얼"];

  const allStyles: string[] = [
    "데일리",
    "캐주얼 시크크",
    "캐주얼",
    "레이어드",
    "클래식",
    "스포티",
    "아방가르드",
  ];

  return (
    <section className="flex flex-col gap-10 p-10 bg-white md:gap-12 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <IoShirtOutline
          style={{
            width: mobile || tablet ? "1.5rem" : "2rem",
            height: mobile || tablet ? "1.5rem" : "2rem",
          }}
        />
        <h2 className="text-lg font-bold tracking-tight md:text-xl text-nowrap">
          선호 스타일
        </h2>
      </div>
      {isEdit ? (
        <ToggleButtonGroup
          value={alignment}
          onChange={handleAlignment}
          sx={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gridTemplateColumns: "repeat(auto-fit,minmax(10rem,1fr))",
            gap: 3,
            "& .MuiToggleButton-root": {
              borderRadius: "12px",
              border: "1px solid",
            },
          }}
        >
          {allStyles.map((style) => (
            <Tooltip title={style}>
              <ToggleButton
                value={style}
                sx={{
                  display: "flex",
                  width: "10rem",
                  fontWeight: "bold",
                  borderRadius: "12px",

                  "&.Mui-selected": {
                    backgroundColor: "purple",
                    color: "white",
                  },

                  "&.Mui-selected:hover": {
                    backgroundColor: "purple",
                    filter: "brightness(0.85)",
                  },
                }}
              >
                <div className="flex items-center justify-center flex-1">
                  {style}
                </div>
                <CheckCircleOutlineOutlinedIcon
                  sx={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </ToggleButton>
            </Tooltip>
          ))}
        </ToggleButtonGroup>
      ) : (
        <div className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] gap-5">
          {selectedStyles.map((style) => (
            <Tooltip title={style}>
              <Box
                // variant="contained"
                // value={style}
                // color="secondary"
                // disabled
                sx={{
                  display: "flex",
                  width: "7rem",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  backgroundColor: "pink",
                  color: "white",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <div className="w-full line-clamp-1">{style}</div>
              </Box>
            </Tooltip>
          ))}
        </div>
      )}
    </section>
  );
}

export default PreferStyleSection;
