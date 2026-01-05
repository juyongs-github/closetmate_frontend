import { Controller } from "react-hook-form";
import { SEASONS, type ClosetSectionProps } from "../../types/closet";
import CategoryToggleButton from "../ui/CategoryToggleButton";
import { FormControl, FormLabel } from "@mui/material";

function SeasonField({ control }: ClosetSectionProps) {
  return (
    <Controller
      name="season"
      control={control}
      rules={{
        required: "시즌을 선택해 주세요.",
      }}
      render={({ field }) => (
        <FormControl
          component="fieldset"
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: 2,
            p: 2,
          }}
        >
          <FormLabel component="legend" sx={{ p: 1, fontWeight: "bold" }}>
            시즌
          </FormLabel>
          <CategoryToggleButton
            category={SEASONS}
            alignment={field.value}
            onChange={(value) => {
              field.onChange(value);
            }}
          />
        </FormControl>
      )}
    />
  );
}

export default SeasonField;
