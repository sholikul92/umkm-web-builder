import { websiteBaseSchema } from "../schemas/site.schema";
import { z } from "zod";

export type WebsiteBaseTypeInput = z.infer<typeof websiteBaseSchema>;
