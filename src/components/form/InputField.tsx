import { TextField, type SxProps, type Theme } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules: RegisterOptions<T>;
  label: string;
  type: string;
  numberOnly: boolean;
  sx?: SxProps<Theme>;
}

function InputField<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  type,
  numberOnly,
  sx,
}: InputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          label={label}
          variant="outlined"
          type={type}
          sx={{ ...sx }}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            if (numberOnly) {
              value = value.replace(/[^0-9-]/g, "");
              if (value.length > 11) return;
            }
            field.onChange(value);
          }}
        />
      )}
    />
  );
}

export default InputField;
