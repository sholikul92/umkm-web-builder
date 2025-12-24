import { formWebsiteSchema } from "../schemas/website.form.schema";
import { publishWebsiteSchema } from "../schemas/website.publish.schema";
import { z } from "zod";

export type FormWebsiteType = z.infer<typeof formWebsiteSchema>;

export type WebsitePublicType = z.infer<typeof publishWebsiteSchema>;

export type WebsiteTemplateData = WebsitePublicType;
