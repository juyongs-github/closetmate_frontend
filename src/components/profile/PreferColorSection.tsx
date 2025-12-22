import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { Box, Tooltip } from "@mui/material";
import type { ProfileSectionProps } from "../../types/profile";
import ColorPickerField from "../form/ColorPickerField";

function PreferColorSection({ isEdit, control }: ProfileSectionProps) {
  const colors: string[] = [
    "#ffffff",
    "#000000",
    "#aaaaaa",
    "#abcdef",
    "#aaaaaa",
    "#aaaaaa",
  ];

  return (
    <section className="flex flex-col gap-10 p-10 bg-white md:gap-12 rounded-2xl">
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
        <h2 className="text-lg font-bold tracking-tight md:text-xl">
          선호 색상
        </h2>
      </div>
      {isEdit ? (
        <div>
          <ColorPickerField
            name="color"
            control={control}
            sx={{
              width: "100%",
            }}
          />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-5 place-items-center">
          {colors.map((color) => (
            <Tooltip title={color}>
              <Box
                sx={{
                  width: "5rem",
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
      )}
    </section>
  );
}

export default PreferColorSection;
