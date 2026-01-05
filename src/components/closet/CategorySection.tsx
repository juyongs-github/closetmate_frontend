import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import type { MouseEvent } from "react";
import {
  CLOSET_CATEGORYS,
  type ClosetCategory,
  type ClosetSectionProps,
} from "../../types/closet";
import { Controller } from "react-hook-form";

function CategorySection({ control }: ClosetSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-yellow-200 shadow-xl md:w-1/2 rounded-2xl p-7">
      <h1 className="text-lg font-semibold tracking-tight text-gray-900 text-balance md:text-xl">
        카테고리
      </h1>
      <div className="flex items-center gap-5 md:gap-7">
        <Controller
          name="category"
          control={control}
          rules={{
            required: "카테고리를 선택해 주세요.",
          }}
          render={({ field }) => (
            <ToggleButtonGroup
              value={field.value}
              exclusive
              onChange={(
                event: MouseEvent<HTMLElement>,
                newAlignment: ClosetCategory
              ) => {
                if (!newAlignment) return;
                field.onChange(newAlignment);
              }}
              sx={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 3,
                "& .MuiToggleButton-root": {
                  borderRadius: "12px",
                  border: "1px solid",
                },
              }}
            >
              {CLOSET_CATEGORYS.filter((item) => item.value !== "전체").map(
                (item) => (
                  <Tooltip key={item.value} title={item.value}>
                    <ToggleButton
                      value={item.value}
                      sx={{
                        display: "flex",
                        width: "6rem",
                        fontWeight: "bold",
                        borderRadius: "12px",

                        "&.Mui-selected": {
                          backgroundColor: "#B9A7E8",
                          color: "white",
                        },

                        "&.Mui-selected:hover": {
                          backgroundColor: "#B9A7E8",
                          filter: "brightness(0.85)",
                        },
                      }}
                    >
                      <div className="flex flex-col items-center justify-center flex-1">
                        <CheckCircleOutlineOutlinedIcon
                          sx={{
                            width: "1.5rem",
                            height: "1.5rem",
                          }}
                        />
                        {item.value}
                      </div>
                    </ToggleButton>
                  </Tooltip>
                )
              )}
            </ToggleButtonGroup>
          )}
        />
      </div>
    </section>
  );
}

export default CategorySection;
