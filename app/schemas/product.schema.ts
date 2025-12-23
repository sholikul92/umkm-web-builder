import { z } from "zod";

export const productBaseSchema = z.object({
  name: z.string().min(1, "Nama Produk Wajib di Isi!"),
  description: z.string("Deskripsi Produk Wajib di Isi!").min(50, "Minimal 50 karakter"),
  image: z
    .instanceof(File)
    .nullable()
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, "Ukuran gambar maksimal 2MB")
    .refine((file) => !file || ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Format gambar tidak didukung"),
});
