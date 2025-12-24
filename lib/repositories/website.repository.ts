import { prisma } from "@/lib/prisma";

export const getUserWebsites = async (userId: string) => {
  return prisma.website.findMany({
    where: { userId },
  });
};
