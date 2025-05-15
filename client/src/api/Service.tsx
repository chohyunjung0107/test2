import api from "./IApi";
import type { TUser, TSearchParams } from "../type/TUser";

// 유저 리스트 조회
export const getUserList = (params: TSearchParams) =>
  api.get("/users", { params });

// 유저 생성
export const createUser = (data: TUser) => api.post("/users", data);

// 유저 수정
export const updateUser = (id: string, data: TUser) =>
  api.put(`/users/${id}`, data);

// 유저 삭제
export const deleteUser = (id: string) => api.delete(`/users/${id}`);
