import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SummarySection from "../components/profile/SummarySection";
import MyActivitySection from "../components/profile/MyActivitySection";
import PreferStyleSection from "../components/profile/PreferStyleSection";
import PreferColorSection from "../components/profile/PreferColorSection";
import BasicInfoSection from "../components/profile/BasicInfoSection";
import { useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import type { ProfileForm } from "../types/profile";
import { Button } from "@mui/material";

function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  const { control, handleSubmit } = useForm<ProfileForm>({
    defaultValues: {
      name: "",
      introduce: "",
      birthday: dayjs(),
      gender: "WOMEN",
      phoneNumber: "",
      height: 170,
      weight: 60,
      figure: "",
      style: "",
      color: "",
    },
  });

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-300">
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 pb-16 mx-10 md:mx-20 pt-36"
      >
        <SummarySection
          onEdit={() => setIsEdit(true)}
          isEdit={isEdit}
          control={control}
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <MyActivitySection />
          <BasicInfoSection isEdit={isEdit} control={control} />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <PreferStyleSection isEdit={isEdit} />
          <PreferColorSection isEdit={isEdit} control={control} />
        </div>
        {isEdit && (
          <div className="grid grid-cols-2 gap-x-5 md:gap-x-10 h-[3rem] md:h-[3.5rem]">
            <Button
              variant="contained"
              color="error"
              onClick={() => setIsEdit(false)}
            >
              취소
            </Button>
            <Button type="submit" variant="contained" color="success">
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
