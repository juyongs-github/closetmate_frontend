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

export const GENDERS = [
  { value: "MEN", label: "남" },
  { value: "WOMEN", label: "여" },
] as const;
export type Gender = (typeof GENDERS)[number]["value"];
export type GenderOption = (typeof GENDERS)[number];

export const FIGURES = [
  { value: "SKINNY", label: "마름" },
  { value: "SLIM", label: "슬림 탄탄" },
  { value: "NORMAL", label: "보통" },
  { value: "CHUBBY", label: "통통" },
  { value: "LARGE", label: "건장" },
] as const;
export type Figure = (typeof FIGURES)[number]["value"];
export type FigureOption = (typeof FIGURES)[number];

export const STYLES = [
  { value: "CASUAL", label: "캐주얼" },
  { value: "MINIMAL", label: "미니멀" },
  { value: "STREET", label: "스트릿" },
  { value: "DANDY", label: "댄디" },
  { value: "SPORTY", label: "스포티" },
  { value: "VINTAGE", label: "빈티지" },
  { value: "FEMININE", label: "페미닌" },
  { value: "MODERN", label: "모던" },
] as const;
export type Style = (typeof STYLES)[number]["value"];
export type StyleOption = (typeof STYLES)[number];
