import type { Website } from "./DashboardSection";

export default function SiteCard({ website }: { website: Website }) {
  const isDraft = website.status === "draft";

  return (
    <div className='bg-white rounded-2xl shadow p-6'>
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h2 className='font-semibold text-lg'>{website.name}</h2>
          <p className='text-sm text-gray-500'>{website.subdomain}</p>
        </div>
        {isDraft ? (
          <span className='text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full'>Draft</span>
        ) : (
          <span className='text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full'>Published</span>
        )}
      </div>

      {isDraft && website.progress !== undefined && (
        <div className='w-full bg-gray-200 rounded-full h-2 mb-4'>
          <div className='bg-indigo-600 h-2 rounded-full' style={{ width: `${website.progress}%` }} />
        </div>
      )}

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
