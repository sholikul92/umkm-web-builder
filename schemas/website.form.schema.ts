import { z } from "zod";

export const formProductSchema = z.object({
  name: z.string().min(1, "Nama Produk Wajib di Isi!"),
  description: z.string("Deskripsi Produk Wajib di Isi!").min(50, "Minimal 50 karakter"),
  imageUrl: z
    .instanceof(File)
    .nullable()
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, "Ukuran gambar maksimal 2MB")
    .refine((file) => !file || ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Format gambar tidak didukung"),
});

export const formWebsiteSchema = z.object({
  businessName: z.string().min(1, "Nama Usaha Wajib di Isi"),
  businessType: z.string().min(1, "Jenis Usaha Wajib dipilih!"),
  location: z.string().min(1, "Lokasi Wajib di Isi!"),
  whatsapp: z.string().regex(/^62\d{8,13}$/, "Format WhatsApp tidak valid"),
  products: z.array(formProductSchema).min(1, "Minimal Harus Memiliki 1 Produk"),
});
