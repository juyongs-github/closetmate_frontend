import { useMediaQuery, useTheme } from "@mui/material";

export function useResponsive() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return {
    mobile,
    tablet,
  };
}
