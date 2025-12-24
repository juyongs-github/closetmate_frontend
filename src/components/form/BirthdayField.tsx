import type { SxProps, Theme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface BirthdayFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  sx?: SxProps<Theme>;
}

function BirthdayField<T extends FieldValues>({
  name,
  control,
  sx,
}: BirthdayFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "생년월일을 입력해 주세요.",
      }}
      render={({ field, fieldState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <DatePicker
            {...field}
            label="생년월일"
            maxDate={dayjs()}
            value={dayjs(field.value, "YYYYMMDD")}
            onChange={(newValue) => {
              if (newValue) {
                const formatDate = newValue.format("YYYYMMDD");
                field.onChange(formatDate);
              }
            }}
            slotProps={{
              textField: {
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                sx: { ...sx },
              },
              popper: {
                placement: "bottom-end",
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
}

export default BirthdayField;
