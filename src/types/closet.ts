import type { Control, RegisterOptions } from "react-hook-form";

export const CLOSET_CATEGORYS = [
  { value: "전체" },
  { value: "상의" },
  { value: "하의" },
  { value: "원피스" },
  { value: "아우터" },
  { value: "신발" },
  { value: "악세서리" },
] as const;
export type ClosetCategory = (typeof CLOSET_CATEGORYS)[number]["value"];
export type ClosetCategoryOption = (typeof CLOSET_CATEGORYS)[number];

export const LETTER_SIZES = [
  { value: "XS" },
  { value: "S" },
  { value: "M" },
  { value: "L" },
  { value: "XL" },
  { value: "XXL" },
  { value: "FREE" },
] as const;
export type LetterSize = (typeof LETTER_SIZES)[number]["value"];
export type LetterSizeOption = (typeof LETTER_SIZES)[number];

export const SHOE_SIZES = Array.from({ length: 11 }, (v, i) => ({
  value: `${200 + 10 * i}mm`,
}));
export type ShoeSize = (typeof SHOE_SIZES)[number]["value"];
export type ShoeSizeOption = (typeof SHOE_SIZES)[number];

export const SEASONS = [
  { value: "봄" },
  { value: "여름" },
  { value: "가을" },
  { value: "겨울" },
  { value: "사계절" },
] as const;
export type Season = (typeof SEASONS)[number]["value"];
export type SeasonOption = (typeof SEASONS)[number];

export interface ClosetItemForm {
  image: File | null;
  category: ClosetCategory | null;
  title: string;
  color: string;
  size: LetterSize | ShoeSize | null;
  season: Season | null;
  detail: string;
}

export interface ClosetSectionProps {
  control: Control<ClosetItemForm>;
  rules?: RegisterOptions<ClosetItemForm>;
}

export interface ClosetItemFormBaseProps {
  defaultValues: ClosetItemForm;
  onSubmit: (data: ClosetItemForm) => void;
  title: string;
  submitText: string;
}
