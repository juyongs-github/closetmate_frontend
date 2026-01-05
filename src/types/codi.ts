export const SITUATION_CATEGORYS = [
  { value: "전체" },
  { value: "데일리" },
  { value: "출근" },
  { value: "데이트" },
  { value: "여행" },
  { value: "운동" },
  { value: "모임" },
  { value: "결혼식" },
  { value: "장례식" },
] as const;
export type SituationCategory = (typeof SITUATION_CATEGORYS)[number]["value"];
export type SituationCategoryOption = (typeof SITUATION_CATEGORYS)[number];
