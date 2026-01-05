import { Avatar, Box, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import type { ClosetSectionProps } from "../../types/closet";

function UploadImageSection({ control }: ClosetSectionProps) {
  const [uploadImg, setUploadImg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <section className="relative flex flex-col items-center justify-center shadow-xl md:w-1/2 rounded-2xl bg-cyan-200 p-7">
      <Controller
        name="image"
        control={control}
        rules={{
          required: "이미지를 등록 해주세요.",
        }}
        render={({ field }) => (
          <>
            {uploadImg ? (
              <div className="w-full aspect-square">
                <img
                  src={uploadImg}
                  alt="profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 20,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.9)",
                    },
                    p: 1,
                  }}
                  onClick={() => {
                    URL.revokeObjectURL(uploadImg);
                    setUploadImg(null);
                    field.onChange(null); // form 값 초기화
                    if (fileRef.current) {
                      fileRef.current.value = ""; // 업로드 이미지 초기화
                    }
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            ) : (
              <Box
                component="label"
                sx={{
                  cursor: uploadImg ? "default" : "pointer",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                  <h1 className="text-lg font-semibold tracking-tight text-center text-gray-900 text-balance md:text-xl">
                    이미지 선택
                  </h1>
                  <p className="text-xs font-semibold text-center text-gray-500 text-pretty md:text-sm">
                    저장된 이미지를 선택하여 등록하세요.
                  </p>
                </div>
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
              </Box>
            )}
          </>
        )}
      />
    </section>
  );
}

export default UploadImageSection;
