import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import React from "react";
import { Controller } from "react-hook-form";
import type { ProfileSectionProps } from "../../types/profile";
import { STYLES, type Style } from "../../types/common";

function PreferStyleField({ control }: Omit<ProfileSectionProps, "isEdit">) {
  return (
    <Controller
      name="style"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length > 5) {
            return "최대 5개까지 선택 가능합니다.";
          } else if (value.length >= 1) {
            return true;
          } else {
            return "최소 1개 이상 선택해 주세요.";
          }
        },
      }}
      render={({ field }) => (
        <div>
          <ToggleButtonGroup
            value={field.value ?? []}
            onChange={(
              event: React.MouseEvent<HTMLElement>,
              newAlignment: Style[]
            ) => {
              field.onChange(newAlignment);
            }}
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
            {STYLES.map((style) => (
              <Tooltip key={style.value} title={style.label}>
                <ToggleButton
                  value={style.value}
                  sx={{
                    display: "flex",
                    width: "10rem",
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
                  <div className="flex items-center justify-center flex-1">
                    {style.label}
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
        </div>
      )}
    />
  );
}

export default PreferStyleField;
