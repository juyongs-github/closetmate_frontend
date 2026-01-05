import { configureStore } from "@reduxjs/toolkit";
import viewModeReducer from "./slices/viewModeSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    viewMode: viewModeReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
