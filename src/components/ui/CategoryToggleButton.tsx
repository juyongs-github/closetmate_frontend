import { type MouseEvent } from "react";
import ToggleButton, { toggleButtonClasses } from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: "1.25rem",
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderRadius: 10,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderRadius: 10,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
      borderRadius: 10,
    },
}));

interface CategoryBase {
  value: string;
}

interface CategoryToggleButtonProps<T extends CategoryBase> {
  category: readonly T[];
  alignment: string | null;
  onChange: (value: string | null) => void;
}

function CategoryToggleButton<T extends CategoryBase>({
  category,
  alignment,
  onChange,
}: CategoryToggleButtonProps<T>) {
  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (!newAlignment) return;
    onChange(newAlignment);
  };

  return (
    <Box
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
      >
        {category.map((item) => (
          <ToggleButton
            key={item.value}
            value={item.value}
            sx={{
              gap: 0.75,
              px: 1.5,
              "&.Mui-selected": {
                backgroundColor: "#E09F3E",
                color: "white",
              },

              "&.Mui-selected:hover": {
                backgroundColor: "#E09F3E",
                filter: "brightness(0.85)",
              },
            }}
          >
            <span>{item.value}</span>
          </ToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Box>
  );
}

export default CategoryToggleButton;
