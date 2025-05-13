import api from "./IApi";
import type { TUser } from "../type/TUser";

// 유저 리스트 조회
export const getUserList = (params: TUser) => api.get("api/users", { params });

// 유저 생성
export const createUser = (data: TUser) => api.post("api/users", data);

// 유저 수정
export const updateUser = (id: number, data: TUser) =>
  api.put(`api/users/${id}`, data);

// 유저 삭제
export const deleteUser = (id: number) => api.delete(`api/users/${id}`);
