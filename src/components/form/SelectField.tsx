import { MenuItem, TextField, type SxProps, type Theme } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface SelectOption {
  value: string;
}

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
  options: SelectOption[];
}

function SelectField<T extends FieldValues>({
  name,
  control,
  label,
  size,
  sx,
  options,
}: SelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          if (!value || value === "DEFAULT") {
            return `${label}을(를) 선택 하세요.`;
          }
          return true;
        },
      }}
      render={({ field, fieldState }) => (
        <TextField
          select
          label={label}
          size={size}
          sx={{ ...sx }}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export default SelectField;
