import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BirthdayField from "../form/BirthdayField";
import { type ProfileSectionProps } from "../../types/profile";
import SelectField from "../form/SelectField";
import InputField from "../form/InputField";
import { FIGURES, GENDERS } from "../../types/common";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ChangePasswordDialog from "../modal/ChangePasswordDialog";

function BasicInfoSection({ isEdit, control }: ProfileSectionProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="flex flex-col gap-12 p-10 bg-white shadow-md md:gap-16 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <InfoOutlinedIcon
          sx={{
            width: {
              xs: "1.5rem",
              md: "2rem",
            },
            height: {
              xs: "1.5rem",
              md: "2rem",
            },
          }}
        />
        <h2 className="text-lg font-bold tracking-tight md:text-xl">
          기본 정보
        </h2>
      </div>
      {isEdit ? (
        <div className="grid items-center min-w-0 gap-y-5 md:gap-y-7 text-nowrap">
          <BirthdayField
            name="birthday"
            control={control}
            sx={{
              width: "100%",
            }}
          />
          <SelectField
            name="gender"
            control={control}
            label="성별"
            sx={{
              width: "100%",
            }}
            options={[...GENDERS]}
          />
          <InputField
            name="phoneNumber"
            control={control}
            rules={{
              required: "휴대폰번호를 입력해 주세요.",
              minLength: {
                value: 10,
                message: "최소 10자리 이상이어야 합니다.",
              },
            }}
            label="휴대폰번호"
            type="tel"
            numberOnly={true}
            sx={{
              width: "100%",
            }}
          />
          <InputField
            name="height"
            control={control}
            rules={{
              required: "키를 입력해 주세요.",
            }}
            label="키"
            type="text"
            numberOnly={false}
            sx={{
              width: "100%",
            }}
            endAdornment="cm"
          />
          <InputField
            name="weight"
            control={control}
            rules={{
              required: "체중을 입력해 주세요.",
            }}
            label="체중"
            type="text"
            numberOnly={false}
            sx={{
              width: "100%",
            }}
            endAdornment="kg"
          />
          <SelectField
            name="figure"
            control={control}
            label="체형"
            sx={{
              width: "100%",
            }}
            options={[...FIGURES]}
          />
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              height: {
                xs: "2.5rem",
                md: "3rem",
              },
              backgroundColor: "sky",
              borderRadius: 50,
            }}
            onClick={handleOpen}
          >
            <span>비밀번호 변경</span>
          </Button>
          <ChangePasswordDialog open={open} onClose={handleClose} />
        </div>
      ) : (
        <div className="grid items-center min-w-0 grid-cols-2 text-sm gap-y-7 md:gap-y-10 text-nowrap md:text-base">
          <p className="font-bold">생년월일</p>
          <p className="min-w-0 tracking-wide text-right truncate">
            2000.01.01
          </p>
          <p className="font-bold">성별</p>
          <p className="min-w-0 tracking-wide text-right truncate">남</p>
          <p className="font-bold">휴대폰번호</p>
          <p className="min-w-0 tracking-wide text-right truncate">
            010<span className="text-[0.75rem]">-</span>
            1234<span className="text-[0.75rem]">-</span>
            5678
          </p>
          <p className="font-bold">키</p>
          <p className="min-w-0 tracking-wide text-right truncate">
            178<span className="ml-1 font-semibold">cm</span>
          </p>
          <p className="font-bold">체중</p>
          <p className="min-w-0 tracking-wide text-right truncate">
            80<span className="ml-1 font-semibold">kg</span>
          </p>
          <p className="font-bold">체형</p>
          <p className="min-w-0 tracking-wide text-right truncate">보통</p>
        </div>
      )}
    </section>
  );
}

export default BasicInfoSection;
