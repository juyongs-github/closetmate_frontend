import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** JWT 저장 */
interface AuthState {
  accessToken: string | null;
  isLogin: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      state.isLogin = true;
    },
    logout(state) {
      state.accessToken = null;
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
