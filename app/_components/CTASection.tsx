import Link from "next/link";

export default function CTASection() {
  return (
    <section className='py-24 px-6 text-center'>
      <div className='max-w-3xl mx-auto space-y-6'>
        <h2 className='text-3xl font-bold'>Saatnya Bisnis Anda Online</h2>

        <p className='text-gray-600'>Buat website profesional sekarang juga dan tingkatkan kepercayaan pelanggan.</p>

        <Link href='/register' className='inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700'>
          Buat Website Sekarang
        </Link>
      </div>
    </section>
  );
}
