import Link from "next/link";

export default function AvailableStateHero() {
  return (
    <section className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
      <div>
        <h1 className='text-3xl font-bold'>Website Anda</h1>
        <p className='text-gray-600'>Kelola semua website yang telah Anda buat di ALTWeb.</p>
      </div>
      <Link href='/dashboard/site/create'>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold'>+ Tambah Website Baru</button>
      </Link>
    </section>
  );
}
