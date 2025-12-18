import { Box } from "@mui/material";
import type React from "react";

interface TabContentProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

function TabContent({ index, value, children }: TabContentProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: {
              xs: "15rem",
              md: "30rem",
            },
            p: {
              xs: 5,
              md: 7,
            },
            gap: {
              xs: 5,
              md: 7,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabContent;
