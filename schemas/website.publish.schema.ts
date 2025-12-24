import { z } from "zod";

export const publishProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.url().nullable(),
});

export const publishWebsiteSchema = z.object({
  businessName: z.string().min(1),
  businessType: z.string().min(1),
  location: z.string().min(1),
  whatsapp: z.string().min(1),
  products: z.array(publishProductSchema).min(1),
});
