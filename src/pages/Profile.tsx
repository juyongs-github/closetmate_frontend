import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SummarySection from "../components/profile/SummarySection";
import MyActivitySection from "../components/profile/MyActivitySection";
import PreferStyleSection from "../components/profile/PreferStyleSection";
import PreferColorSection from "../components/profile/PreferColorSection";
import BasicInfoSection from "../components/profile/BasicInfoSection";
import { useEffect, useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import type { ProfileForm } from "../types/profile";
import { Button } from "@mui/material";
import type { UserInfo } from "../types/common";
import Swal from "sweetalert2";

function Profile() {
  const dummyUserInfo: UserInfo = {
    image: null,
    name: "홍길동",
    introduce: "패션을 좋아하는 20대 직장인",
    closetItemCnt: 1000,
    aiRecommandCnt: 3000,
    saveCodiCnt: 2000,
    birthday: "20010101",
    gender: "남",
    phoneNumber: "01012345678",
    height: 170,
    weight: 60,
    figure: "보통",
    style: ["캐주얼", "스트릿", "댄디"],
    color: ["#ffffff", "#000000", "#aaaaaa"],
  };

  const [isEdit, setIsEdit] = useState(false);

  const { control, handleSubmit, reset } = useForm<ProfileForm>({
    defaultValues: {
      name: dummyUserInfo.name,
      introduce: dummyUserInfo.introduce,
      birthday: dummyUserInfo.birthday,
      gender: dummyUserInfo.gender,
      phoneNumber: dummyUserInfo.phoneNumber,
      height: dummyUserInfo.height,
      weight: dummyUserInfo.weight,
      figure: dummyUserInfo.figure,
      style: dummyUserInfo.style,
      color: dummyUserInfo.color.map((item) => ({ value: item })),
    },
  });

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
    Swal.fire({
      icon: "question",
      html: "<b>수정 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>수정 되었습니다.</b>",
        });
      }
    });
  };

  const onError = (errors: FieldErrors<ProfileForm>) => {
    if (errors.style) {
      Swal.fire({
        icon: "warning",
        title: "선호 스타일",
        html: `<b>${errors.style.message}</b>`,
        confirmButtonText: "확인",
      });
    }
  };

  useEffect(() => {
    if (!isEdit) {
      reset(); // form 초기화
    }
  }, [isEdit, reset]);

  return (
    <div className="bg-gray-100">
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col pb-16 mx-10 gap-7 pt-36"
      >
        <SummarySection
          onEdit={() => setIsEdit(true)}
          isEdit={isEdit}
          control={control}
        />
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <MyActivitySection />
          <BasicInfoSection isEdit={isEdit} control={control} />
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <PreferStyleSection
            isEdit={isEdit}
            control={control}
            styles={dummyUserInfo.style}
          />
          <PreferColorSection
            isEdit={isEdit}
            control={control}
            colors={dummyUserInfo.color}
          />
        </div>
        {isEdit && (
          <div className="grid grid-cols-2 gap-x-5 md:gap-x-7 h-[3rem] md:h-[3.5rem]">
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: 5,
              }}
              onClick={() => {
                setIsEdit(false);
              }}
            >
              취소
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                borderRadius: 5,
              }}
            >
              수정
            </Button>
          </div>
        )}
      </form>
      <Footer />
    </div>
  );
}

export default Profile;
