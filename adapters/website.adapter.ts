import { WebsitePublicType, FormWebsiteType, WebsiteTemplateData } from "../types/website.types";

export function PreviewTemplate(data: FormWebsiteType): WebsiteTemplateData {
  return {
    ...data,
    products: data.products.map((product) => ({
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl ? URL.createObjectURL(product.imageUrl) : null,
    })),
  };
}

export function PublishTemplate(data: WebsitePublicType): WebsiteTemplateData {
  return {
    ...data,
    products: data.products.map((product) => ({
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
    })),
  };
}
