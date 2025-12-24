import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import WebTemplate from "@/components/templates/WebTemplate";
import { PublishTemplate } from "@/adapters/website.adapter";

export default async function SitePage({ params }: { params: { slug: string } }) {
  const website = await prisma.website.findUnique({
    where: {
      slug: params.slug,
      status: "PUBLISHED",
    },
    include: {
      products: true,
    },
  });

  if (!website) notFound();

  return <WebTemplate data={PublishTemplate(website)} />;
}
