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
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function MoreButton() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const itemRemove = () => {
    setAnchorEl(null);
    Swal.fire({
      icon: "question",
      html: "<b>삭제 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>삭제 되었습니다.</b>",
        });
      }
    });
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
        {location.pathname === "/mycloset" && (
          <>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/closetitem-edit"
            >
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <span>수정하기</span>
            </MenuItem>
            <Divider />
          </>
        )}
        <MenuItem onClick={itemRemove}>
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
