export default function HelpSection() {
  return (
    <section className='bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4'>
      <div>
        <h3 className='font-semibold mb-1'>Butuh Bantuan?</h3>
        <p className='text-sm text-gray-600'>Tim ALTWeb siap membantu Anda memulai.</p>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold'>Hubungi Admin</button>
    </section>
  );
}
