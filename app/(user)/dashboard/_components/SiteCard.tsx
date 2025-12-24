import { WebsiteStatus } from "@/app/generated/prisma/enums";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Website {
  businessName: string;
  businessType: string;
  location: string;
  whatsapp: string;
  id: string;
  slug: string;
  status: WebsiteStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

const BASE_URL = process.env.NODE_ENV === "production" ? "https://altwebsite.vercel.app" : "localhost";

export default function SiteCard({ website }: { website: Website }) {
  const isDraft = website.status === "DRAFT";
  const url = `${BASE_URL}/${website.slug}`;

  return (
    <div className='bg-white rounded-2xl shadow p-6 mt-4'>
      <div className='flex flex-col md:flex-row gap-2 justify-between items-start mb-4'>
        <div>
          <h2 className='font-semibold text-lg'>{website.businessName}</h2>
          <Link href={`/${website.slug}`} className='text-sm text-gray-500'>
            altwebsite.vercell.app/{website.slug}
          </Link>
        </div>
        {isDraft ? (
          <span className='text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full'>Draft</span>
        ) : (
          <span className='text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full'>Published</span>
        )}
      </div>

      <div className='flex gap-2'>
        {isDraft ? (
          <>
            <Button>Lanjutkan Edit</Button>
            <Button>Preview</Button>
          </>
        ) : (
          <>
            <Button variant='outline' className='hover:bg-transparent'>
              Edit Website
            </Button>
            <Link href={url}>
              <Button>Lihat Website</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
