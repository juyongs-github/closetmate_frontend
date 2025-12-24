import { Box, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import type { ProfileSectionProps } from "../../types/profile";

function AvatarField({ isEdit, control }: ProfileSectionProps) {
  const [uploadImg, setUploadImg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name="image"
      control={control}
      render={({ field }) => (
        <Box
          sx={{
            position: "relative",
            width: "8rem",
            height: "8rem",
          }}
        >
          <Box
            component="label"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: 100,
              overflow: "hidden",
              cursor: isEdit ? "pointer" : "default",
            }}
          >
            {uploadImg ? (
              <img
                src={uploadImg}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <PersonIcon
                sx={{
                  width: "100%",
                  height: "100%",
                  p: 2,
                  backgroundColor: "grey.300",
                }}
              />
            )}

            {isEdit && (
              <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setUploadImg(URL.createObjectURL(file)); // 업로드 이미지 미리보기
                    field.onChange(file); // form 값 변경
                  }
                }}
              />
            )}
          </Box>

          {/* 수정 버튼 */}
          {isEdit && !uploadImg && (
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 20,
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.9)",
                },
                p: 1,
              }}
              onClick={() => {
                fileRef.current?.click();
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          )}

          {/* 삭제 버튼 */}
          {isEdit && uploadImg && (
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 20,
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.9)",
                },
                p: 1,
              }}
              onClick={() => {
                setUploadImg(null);
                field.onChange(null); // form 값 초기화
                if (fileRef.current) {
                  fileRef.current.value = ""; // 업로드 이미지 초기화
                }
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      )}
    />
  );
}

export default AvatarField;
