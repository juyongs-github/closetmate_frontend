import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CLOSET_CATEGORYS, type ClosetCategory } from "../../types/closet";
import { SITUATION_CATEGORYS, type SituationCategory } from "../../types/codi";

export interface CategoryState {
  closet: ClosetCategory;
  situation: SituationCategory;
}

const initialState: CategoryState = {
  closet: CLOSET_CATEGORYS[0].value,
  situation: SITUATION_CATEGORYS[0].value,
};

type CategoryStateKey = keyof CategoryState;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory<K extends CategoryStateKey>(
      state: CategoryState,
      action: PayloadAction<{ key: K; value: CategoryState[K] }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
    resetCategory<K extends CategoryStateKey>(
      state: CategoryState,
      action: PayloadAction<{ key: K }>
    ) {
      state[action.payload.key] = initialState[action.payload.key];
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
