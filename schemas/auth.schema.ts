import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string({ error: "Nama wajib di isi!" }),
    email: z.email({ error: "Alamat email tidak valid" }).trim(),
    password: z
      .string({ error: "Password Wajib Di Isi!" })
      .min(6, { error: "Password minimal 6 karakter!" })
      .refine((password) => /[A-Z]/.test(password), {
        error: "Password harus berisi 1 huruf kapital",
      })
      .refine((password) => /[0-9]/.test(password), {
        error: "Password harus berisi angka",
      }),
    confirmPassword: z
      .string({ error: "Password Wajib Di Isi!" })
      .min(6, { error: "Password minimal 6 karakter!" })
      .refine((password) => /[A-Z]/.test(password), {
        error: "Password harus berisi 1 huruf kapital",
      })
      .refine((password) => /[0-9]/.test(password), {
        error: "Password harus berisi angka",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password wajib sama!",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email({ error: "Alamat email tidak valid" }).trim(),
  password: z
    .string({ error: "Password Wajib Di Isi!" })
    .min(6, { error: "Password minimal 6 karakter!" })
    .refine((password) => /[A-Z]/.test(password), {
      error: "Password harus berisi 1 huruf kapital",
    })
    .refine((password) => /[0-9]/.test(password), {
      error: "Password harus berisi angka",
    }),
});
