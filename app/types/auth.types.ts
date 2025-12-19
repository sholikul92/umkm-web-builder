import { z } from "zod";
import { signUpSchema, signInSchema } from "../schemas/auth.schema";

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
