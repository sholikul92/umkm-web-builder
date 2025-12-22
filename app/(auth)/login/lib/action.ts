"use server";

import { signInSchema } from "@/app/schemas/auth.schema";
import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";
import { SignInType } from "@/app/types/auth.types";
import { z } from "zod";

export async function handleLogin(data: SignInType) {
  const validateFields = signInSchema.safeParse(data);

  if (!validateFields.success) {
    const fieldError = z.flattenError(validateFields.error);

    return {
      success: false,
      errors: fieldError.fieldErrors,
    };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });

    return {
      success: true,
      message: "login berhasil!",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Email atau Password salah!" };
        default:
          return { success: false, message: "Terjadi masalah pada autentikasi." };
      }
    }
    throw error;
  }
}
