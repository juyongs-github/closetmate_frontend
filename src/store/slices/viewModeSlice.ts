import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ViewMode = "card" | "list";

interface ViewModeState {
  mode: ViewMode;
}

const initialState: ViewModeState = {
  mode: "card",
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode(state, action: PayloadAction<ViewMode>) {
      state.mode = action.payload;
    },
  },
});

export const { setViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
