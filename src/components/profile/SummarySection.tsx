import { Box, Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import profile from "../../assets/header/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../form/InputField";
import type { ProfileSectionProps } from "../../types/profile";
import { useState } from "react";

interface SummarySectionProps extends ProfileSectionProps {
  onEdit: () => void;
}

function SummarySection({ onEdit, isEdit, control }: SummarySectionProps) {
  const [uploadImg, setUploadImg] = useState<string | null>(null);

  return (
    <section className="flex p-10 bg-white md:p-12 rounded-2xl">
      <div className="flex flex-col items-center justify-between w-full gap-8">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={profile} alt="profile" className="w-[2rem] md:w-[3rem]" />
          <h1 className="text-lg font-bold tracking-tight md:text-xl">
            내 프로필
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between w-full md:flex-row gap-7">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-7">
            <Box
              sx={{
                position: "relative",
                width: "7rem",
                height: "7rem",
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
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setUploadImg(URL.createObjectURL(file));
                    }}
                  />
                )}
              </Box>

              {/* 삭제 버튼 */}
              {uploadImg && isEdit && (
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    zIndex: 20,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.9)",
                    },
                  }}
                  onClick={() => setUploadImg(null)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
            {isEdit ? (
              <div className="flex flex-col items-center gap-1.5 md:items-start">
                <div className="flex flex-col items-center gap-1 md:items-start">
                  <InputField
                    name="name"
                    control={control}
                    rules={{
                      required: "이름 또는 닉네임을 입력해 주세요.",
                    }}
                    label="이름 / 닉네임"
                    type="text"
                    numberOnly={false}
                    sx={{
                      width: "70%",
                    }}
                    size="small"
                  />
                  <p className="text-sm font-semibold text-gray-500 md:text-base">
                    abc@otbu.co.kr
                  </p>
                </div>
                <InputField
                  name="introduce"
                  control={control}
                  rules={{
                    required: "자기소개를 입력해 주세요.",
                  }}
                  label="자기소개"
                  type="text"
                  numberOnly={false}
                  sx={{
                    width: "100%",
                  }}
                  size="small"
                  multiline={true}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1 md:items-start">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className="text-base font-bold md:text-lg">홍길동</h2>
                  <p className="text-sm font-semibold text-gray-500 md:text-base">
                    abc@otbu.co.kr
                  </p>
                </div>
                <p className="text-xs md:text-sm line-clamp-1">
                  패션을 좋아하는 20대 직장인
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            {!isEdit && (
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  width: "10rem",
                  height: {
                    xs: "2.5rem",
                    md: "3rem",
                  },
                  minWidth: "auto",
                  backgroundColor: "sky",
                  borderRadius: 50,
                }}
                onClick={onEdit}
              >
                <span>프로필 수정</span>
              </Button>
            )}
            <Button
              variant="contained"
              startIcon={<ExitToAppIcon />}
              sx={{
                width: "10rem",
                height: {
                  xs: "2.5rem",
                  md: "3rem",
                },
                backgroundColor: "red",
                borderRadius: 50,
              }}
            >
              <span>탈퇴하기</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
