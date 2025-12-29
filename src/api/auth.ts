import { api } from "./axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post("/login", payload);
  return data;
};
