import {
  Box,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Tooltip,
  type SxProps,
  type Theme,
} from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import { CompactPicker } from "react-color";
import { useState } from "react";

interface ColorPickerFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  sx?: SxProps<Theme>;
}

function ColorPickerField<T extends FieldValues>({
  name,
  control,
  label,
  sx,
}: ColorPickerFieldProps<T>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label}을 선택하세요.`,
      }}
      render={({ field, fieldState }) => (
        <>
          <TextField
            label={label}
            onClick={handlePopover}
            sx={{
              "& .MuiInputBase-input": {
                cursor: "pointer",
              },
              ...sx,
            }}
            slotProps={{
              inputLabel: {
                shrink: !!field.value,
              },
              input: {
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        backgroundColor: field.value || "#ffffff",
                      }}
                    />
                    <Tooltip title="초기화">
                      <IconButton
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          backgroundColor: "grey.100",
                          color: "grey.600",
                          ml: "7px",
                          "&:hover": {
                            backgroundColor: "grey.200",
                            color: "grey.800",
                          },
                        }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.stopPropagation();
                          field.onChange("");
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              },
            }}
            {...field}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
          {open && (
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <CompactPicker
                color={field.value || "#ffffff"}
                onChange={(value) => field.onChange(value.hex)}
              />
            </Popover>
          )}
        </>
      )}
    />
  );
}

export default ColorPickerField;
