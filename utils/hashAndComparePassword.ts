import { compareSync, hashSync } from "bcrypt";

export const comparePassword = (password: string, hashPassword: string): boolean => {
  return compareSync(password, hashPassword);
};

export const hashPassword = (password: string): string => {
  return hashSync(password, 10);
};
