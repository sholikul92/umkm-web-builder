"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { signUpSchema } from "@/app/schemas/auth.schema";
import { hashPassword } from "@/app/utils/hashAndComparePassword";
import { SignUpType } from "@/app/types/auth.types";

export async function handleRegister(data: SignUpType) {
  const validateFields = signUpSchema.safeParse(data);

  if (!validateFields.success) {
    const fieldError = z.flattenError(validateFields.error);

    return {
      success: false,
      errors: fieldError.fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist)
      return {
        success: false,
        errors: {
          email: ["Email ini sudah digunakan oleh akun lain"],
        },
      };

    const hashedPassword = hashPassword(password);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: "USER",
      },
    });

    return {
      success: true,
      message: "Pendaftaran akun berhasil!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Terjadi kesalahan sistem!",
    };
  }
}
