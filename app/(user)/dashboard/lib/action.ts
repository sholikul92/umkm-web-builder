"use server";
import { auth, signOut } from "@/lib/auth";
import { getUserWebsites } from "@/lib/repositories/website.repository";

export const signOutAction = async () => {
  await signOut({
    redirectTo: "/login",
  });
};

export const fetchUserWebsite = async () => {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const userId = session.user.id;

  return getUserWebsites(userId);
};
