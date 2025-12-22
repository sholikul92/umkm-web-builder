export default function HowItWorkSection() {
  return (
    <section>
      <h2 className='text-xl font-semibold mb-6 text-center'>Cara Membuat Website di ALTWeb</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <div className='text-indigo-600 text-2xl font-bold mb-2'>1</div>
          <h3 className='font-semibold mb-1'>Isi Data Bisnis</h3>
          <p className='text-sm text-gray-500'>Masukkan nama bisnis dan informasi dasar.</p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <div className='text-indigo-600 text-2xl font-bold mb-2'>2</div>
          <h3 className='font-semibold mb-1'>Tambah Produk</h3>
          <p className='text-sm text-gray-500'>Upload produk atau layanan yang Anda tawarkan.</p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <div className='text-indigo-600 text-2xl font-bold mb-2'>3</div>
          <h3 className='font-semibold mb-1'>Publish Website</h3>
          <p className='text-sm text-gray-500'>Website langsung online dan siap dibagikan.</p>
        </div>
      </div>
    </section>
  );
}
