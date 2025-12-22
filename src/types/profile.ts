import type { Dayjs } from "dayjs";
import type { Control } from "react-hook-form";

export interface ProfileForm {
  name: string;
  introduce: string;
  birthday: Dayjs;
  gender: "MEN" | "WOMEN";
  phoneNumber: string;
  height: number;
  weight: number;
  figure: string;
  style: string;
  color: string;
}

export interface ProfileSectionProps {
  isEdit: boolean;
  control: Control<ProfileForm>;
}
