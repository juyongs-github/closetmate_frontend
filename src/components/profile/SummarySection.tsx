import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import profile from "../../assets/header/profile.png";
import InputField from "../form/InputField";
import type { ProfileSectionProps } from "../../types/profile";
import AvatarField from "../form/AvatarField";

interface SummarySectionProps extends ProfileSectionProps {
  onEdit: () => void;
}

function SummarySection({ onEdit, isEdit, control }: SummarySectionProps) {
  return (
    <section className="flex p-10 bg-white shadow-md md:p-12 rounded-2xl">
      <div className="flex flex-col items-center justify-between w-full gap-8">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={profile} alt="profile" className="w-[2rem] md:w-[3rem]" />
          <h1 className="text-lg font-bold tracking-tight md:text-xl">
            내 프로필
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between w-full md:flex-row gap-7">
          <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
            <AvatarField isEdit={isEdit} control={control} />
            {isEdit ? (
              <div className="flex flex-col items-center gap-3 md:items-start">
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
                      width: "100%",
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
                    width: "15rem",
                    // "& .MuiInputBase-input": {
                    //   fontSize: "0.925rem",
                    // },
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
