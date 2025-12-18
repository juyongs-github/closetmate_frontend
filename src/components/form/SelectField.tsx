import { MenuItem, TextField, type SxProps, type Theme } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  sx?: SxProps<Theme>;
  options: SelectOption[];
}

function SelectField<T extends FieldValues>({
  name,
  control,
  label,
  sx,
  options,
}: SelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label}을(를) 선택 하세요.`,
      }}
      render={({ field, fieldState }) => (
        <TextField
          select
          label={label}
          sx={{ ...sx }}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export default SelectField;
