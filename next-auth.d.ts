import NextAuth, { DefaultSession } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      websites: { id: string }[];
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    websites: { id: string }[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    websites: { id: string }[];
  }
}
