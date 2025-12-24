import { WebsiteStatus } from "@/app/generated/prisma/enums";

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

export default function SiteCard({ website }: { website: Website }) {
  const isDraft = website.status === "DRAFT";

  return (
    <div className='bg-white rounded-2xl shadow p-6 mt-4'>
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h2 className='font-semibold text-lg'>{website.businessName}</h2>
          <p className='text-sm text-gray-500'>{website.slug}</p>
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
            <button className='flex-1 bg-indigo-600 text-white py-2 rounded-lg'>Lanjutkan Edit</button>
            <button className='flex-1 border py-2 rounded-lg'>Preview</button>
          </>
        ) : (
          <>
            <button className='flex-1 bg-indigo-600 text-white py-2 rounded-lg'>Edit Website</button>
            <button className='flex-1 border py-2 rounded-lg'>Lihat Website</button>
          </>
        )}
      </div>
    </div>
  );
}
