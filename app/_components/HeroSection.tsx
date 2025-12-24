import Link from "next/link";

export default function HeroSection() {
  return (
    <section className='px-6 py-24 bg-linear-to-br from-indigo-600 to-purple-600 text-white'>
      <div className='max-w-5xl mx-auto text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Buat Website Bisnis Anda
          <span className='block'>Tanpa Ribet & Tanpa Coding</span>
        </h1>

        <p className='text-lg opacity-90'>ALTWeb membantu UMKM memiliki website profesional hanya dalam beberapa menit.</p>

        <div className='flex justify-center gap-4'>
          <Link href='/register' className='bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100'>
            Mulai Gratis
          </Link>

          <Link href='/login' className='border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
