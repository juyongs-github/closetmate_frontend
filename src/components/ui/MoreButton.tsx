import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";

function MoreButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "black",
        }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to="/closetitem-edit">
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <span>수정하기</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <span>삭제</span>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MoreButton;
