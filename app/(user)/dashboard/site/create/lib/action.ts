"use server";

import { prisma } from "@/lib/prisma";
import { uploadProductImage } from "@/lib/supabase/uploadProductImage";
import { generateSlug } from "@/utils/generateSlug";
import { WebsitePublicType } from "@/types/website.types";
import { publishWebsiteSchema } from "@/schemas/website.publish.schema";
import { WebsiteStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { z } from "zod";

type RawProduct = {
  name: string;
  description: string;
};

export async function handlePublishWebsite(formData: FormData, status: WebsiteStatus) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorize");

  const rawProducts = JSON.parse(formData.get("products") as string) as RawProduct[];

  const productWithImages = await Promise.all(
    rawProducts.map(async (product, index) => {
      const file = formData.get(`product_image_${index}`) as File | null;
      const imageUrl = file ? await uploadProductImage(file) : null;

      return {
        name: product.name,
        description: product.description,
        imageUrl,
      };
    })
  );

  const rawData: WebsitePublicType = {
    businessName: formData.get("businessName") as string,
    businessType: formData.get("businessType") as string,
    whatsapp: formData.get("whatsapp") as string,
    location: formData.get("location") as string,
    products: productWithImages,
  };

  const parsed = publishWebsiteSchema.safeParse(rawData);
  if (!parsed.success) {
    const fieldError = z.flattenError(parsed.error);

    return {
      success: false,
      errors: fieldError.fieldErrors,
    };
  }

  const data = parsed.data;
  const slug = generateSlug(data.businessName);

  const website = await prisma.website.create({
    data: {
      userId: session.user.id,
      businessName: data.businessName,
      businessType: data.businessType,
      location: data.location,
      whatsapp: data.whatsapp,
      slug,
      status,
      products: {
        create: data.products,
      },
    },
  });

  return { success: true, websiteId: website.id, slug };
}
