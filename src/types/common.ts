export interface UserInfo {
  image: string | null;
  name: string;
  introduce: string;
  closetItemCnt: number;
  aiRecommandCnt: number;
  saveCodiCnt: number;
  birthday: string;
  gender: Gender;
  phoneNumber: string;
  height: number;
  weight: number;
  figure: Figure;
  style: Style[];
  color: string[];
}

export const GENDERS = [{ value: "남" }, { value: "여" }] as const;
export type Gender = (typeof GENDERS)[number]["value"];
export type GenderOption = (typeof GENDERS)[number];

export const FIGURES = [
  { value: "마름" },
  { value: "슬림 탄탄" },
  { value: "보통" },
  { value: "통통" },
  { value: "건장" },
] as const;
export type Figure = (typeof FIGURES)[number]["value"];
export type FigureOption = (typeof FIGURES)[number];

export const STYLES = [
  { value: "캐주얼" },
  { value: "미니멀" },
  { value: "스트릿" },
  { value: "댄디" },
  { value: "스포티" },
  { value: "빈티지" },
  { value: "페미닌" },
  { value: "모던" },
] as const;
export type Style = (typeof STYLES)[number]["value"];
export type StyleOption = (typeof STYLES)[number];

export const WITHDRAW_REASONS = [
  { value: "선택해 주세요." },
  { value: "사용하기 불편해요." },
  { value: "서비스 이용 빈도가 낮아요." },
  { value: "원하는 기능이 부족해요." },
  { value: "코디가 마음에 들지 않아요." },
  { value: "다른 서비스로 이동하려고 해요." },
  { value: "기타 (직접 입력)" },
] as const;
export type WithdrawReason = (typeof WITHDRAW_REASONS)[number]["value"];
export type WithdrawReasonOption = (typeof WITHDRAW_REASONS)[number];
