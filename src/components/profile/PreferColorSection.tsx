import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Tooltip } from "@mui/material";
import { type ProfileSectionProps } from "../../types/profile";
import ColorPickerField from "../form/ColorPickerField";
import { useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";

interface PreferColorSectionProps extends ProfileSectionProps {
  colors: string[];
}

function PreferColorSection({
  isEdit,
  control,
  colors,
}: PreferColorSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "color",
  });

  return (
    <section className="flex flex-col gap-10 p-10 bg-white shadow-md md:gap-12 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <ColorLensOutlinedIcon
          sx={{
            width: {
              xs: "1.5rem",
              md: "2rem",
            },
            height: {
              xs: "1.5rem",
              md: "2rem",
            },
          }}
        />
        <h2 className="text-lg font-bold tracking-tight md:text-xl">
          선호 색상
        </h2>
      </div>
      {isEdit ? (
        <div className="flex flex-col gap-5">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center">
              <ColorPickerField
                name={`color.${index}.value`}
                control={control}
                sx={{
                  width: "100%",
                }}
              />
              {index > 0 ? (
                <Tooltip title="삭제">
                  <IconButton
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      backgroundColor: "red",
                      color: "white",
                      ml: "10px",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      event.stopPropagation();
                      remove(index);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="추가">
                  <IconButton
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      backgroundColor: "green",
                      color: "white",
                      ml: "10px",
                      "&:hover": {
                        backgroundColor: "green",
                        color: "white",
                      },
                    }}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      event.stopPropagation();
                      if (fields.length >= 7) {
                        Swal.fire({
                          icon: "warning",
                          title: "선호 색상",
                          html: "<b>최대 7개 까지 가능합니다.</b>",
                          confirmButtonText: "확인",
                        });
                        return;
                      }
                      append({ value: "" });
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-5 place-items-center">
          {colors.map((color) => (
            <Tooltip key={color} title={color}>
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
