import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import PasswordField from "../form/PasswordField";
import type { ChangePasswordForm } from "../../types/profile";
import { useForm } from "react-hook-form";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import Swal from "sweetalert2";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
}

function ChangePasswordDialog({ open, onClose }: CustomDialogProps) {
  const {
    control: changePasswordControl,
    handleSubmit: changePasswordHandleSubmit,
    watch: changePasswordWatch,
    reset,
  } = useForm<ChangePasswordForm>();

  const onSubmit = (data: ChangePasswordForm) => {
    console.log(data);
    Swal.fire({
      icon: "question",
      html: "<b>비밀번호를 변경 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>비밀번호가 변경 되었습니다.</b>",
        });
      }
    });
  };

  const currentPassword = changePasswordWatch("currentPassword");
  const newPassword = changePasswordWatch("newPassword");

  useEffect(() => {
    if (!open) {
      reset(); // form 초기화
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onClose={onClose} sx={{ zIndex: 1000 }}>
      <DialogContent
        sx={{
          p: 5,
        }}
      >
        <form
          onSubmit={changePasswordHandleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-2">
              <LockOutlineIcon />
              <h1 className="text-lg font-bold">비밀번호 변경</h1>
            </div>
            <Tooltip title="닫기">
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: 0,
                }}
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-5">
            <PasswordField
              name="currentPassword"
              control={changePasswordControl}
              rules={{
                required: "현재 비밀번호를 입력해 주세요.",
              }}
              label="현재 비밀번호"
              sx={{
                width: "100%",
              }}
            />
            <PasswordField
              name="newPassword"
              control={changePasswordControl}
              rules={{
                required: "새 비밀번호를 입력해 주세요.",
                validate: (value) =>
                  value !== currentPassword ||
                  "현재 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.",
              }}
              label="새 비밀번호"
              sx={{
                width: "100%",
              }}
            />
            <PasswordField
              name="confirmNewPassword"
              control={changePasswordControl}
              rules={{
                required: "새 비밀번호를 확인해 주세요.",
                validate: (value) =>
                  value === newPassword || "새 비밀번호가 일치하지 않습니다.",
              }}
              label="새 비밀번호 확인"
              sx={{
                width: "100%",
              }}
            />
            <p className="p-3 text-xs bg-green-200 border rounded-md">
              <span className="font-bold">안전한 비밀번호 만들기:</span> <br />
              영문 대소문자, 숫자, 특수문자를 조합하여 8자 이상으로 설정하세요.
            </p>
          </div>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            type="submit"
            sx={{
              width: "100%",
              height: {
                xs: "2.5rem",
                md: "3rem",
              },
              backgroundColor: "sky",
              borderRadius: 50,
            }}
            onClick={changePasswordHandleSubmit(onSubmit)}
          >
            <span>비밀번호 변경</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ChangePasswordDialog;
