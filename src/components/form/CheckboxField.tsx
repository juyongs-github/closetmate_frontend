import {
  Checkbox,
  FormControl,
  FormControlLabel,
  type SxProps,
  type Theme,
} from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
interface CheckboxFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules: RegisterOptions<T>;
  sx?: SxProps<Theme>;
  label: string;
}

function CheckboxField<T extends FieldValues>({
  name,
  control,
  rules,
  sx,
  label,
}: CheckboxFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl variant="outlined" error={!!fieldState.error}>
          <FormControlLabel
            control={<Checkbox {...field} />}
            sx={{ ...sx }}
            label={label}
          />
        </FormControl>
      )}
    />
  );
}

export default CheckboxField;
