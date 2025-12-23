import { z } from "zod";
import { productBaseSchema } from "./product.schema";

export const websiteBaseSchema = z.object({
  businessName: z.string().min(1, "Nama Usaha Wajib di Isi"),
  typeofBusiness: z.string().min(1, "Jenis Usaha Wajib dipilih!"),
  location: z.string().min(1, "Lokasi Wajib di Isi!"),
  whatsapp: z.string().regex(/^62\d{8,13}$/, "Format WhatsApp tidak valid"),
  products: z.array(productBaseSchema).min(1, "Minimal Harus Memiliki 1 Produk"),
});
