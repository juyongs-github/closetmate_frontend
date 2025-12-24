import type { Control } from "react-hook-form";
import type { Figure, Gender, Style } from "./common";

export interface ProfileForm {
  image: File;
  name: string;
  introduce: string;
  birthday: string;
  gender: Gender;
  phoneNumber: string;
  height: number;
  weight: number;
  figure: Figure;
  style: Style[];
  color: { value: string }[];
}

export interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ProfileSectionProps {
  isEdit: boolean;
  control: Control<ProfileForm>;
}
