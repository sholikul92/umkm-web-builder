import Link from "next/link";

export default function EmptyStateHero() {
  return (
    <section className='bg-white rounded-2xl shadow p-10 text-center'>
      <h1 className='text-3xl font-bold mb-3'>Selamat datang di ALTWeb 👋</h1>
      <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
        Anda belum memiliki website. Mulai sekarang dan buat website bisnis Anda dalam hitungan menit.
      </p>
      <Link href='/dashboard/site/create'>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl text-lg font-semibold'>
          + Buat Website Pertama Anda
        </button>
      </Link>
    </section>
  );
}
