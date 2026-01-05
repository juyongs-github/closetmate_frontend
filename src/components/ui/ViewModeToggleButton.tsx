import { type MouseEvent } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setViewMode, type ViewMode } from "../../store/slices/viewModeSlice";
import type { AppDispatch, RootState } from "../../store";

function ViewModeToggleButton() {
  const dispatch = useDispatch<AppDispatch>();
  const alignment = useSelector((state: RootState) => state.viewMode.mode);

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: ViewMode
  ) => {
    if (!newAlignment) return;
    dispatch(setViewMode(newAlignment));
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton value="card">
        <Tooltip title="카드">
          <DashboardIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="list">
        <Tooltip title="리스트">
          <FormatListBulletedIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ViewModeToggleButton;
