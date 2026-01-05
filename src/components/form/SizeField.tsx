import { Controller, useWatch } from "react-hook-form";
import {
  LETTER_SIZES,
  SHOE_SIZES,
  type ClosetSectionProps,
} from "../../types/closet";
import CategoryToggleButton from "../ui/CategoryToggleButton";
import { FormControl, FormLabel } from "@mui/material";

function SizeField({ control }: ClosetSectionProps) {
  const category = useWatch({
    control,
    name: "category",
  });

  return (
    <Controller
      name="size"
      control={control}
      rules={{
        required: "사이즈를 선택해 주세요.",
      }}
      render={({ field }) => (
        <FormControl
          component="fieldset"
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: 2,
            p: 2,
            gap: 2,
          }}
        >
          <FormLabel component="legend" sx={{ p: 1, fontWeight: "bold" }}>
            사이즈
          </FormLabel>
          {category === "신발" ? (
            <CategoryToggleButton
              category={SHOE_SIZES}
              alignment={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
            />
          ) : (
            <CategoryToggleButton
              category={LETTER_SIZES}
              alignment={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
            />
          )}
        </FormControl>
      )}
    />
  );
}

export default SizeField;
