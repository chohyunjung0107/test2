export interface TUser {
  id: string;
  password?: string;
  name?: string;
  faceImage?: string;
  age?: number;
  sex?: "M" | "F";
  address?: string;
  tel?: string;
  mobile?: string;
  email?: string;
  birthday?: string;
}
