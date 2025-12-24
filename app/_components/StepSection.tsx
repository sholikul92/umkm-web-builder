const steps = ["Isi Data Bisnis", "Tambahkan Produk", "Preview Website", "Publish & Bagikan Link"];

export default function StepSection() {
  return (
    <section className='py-20 bg-gray-100 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-10'>Cara Kerja ALTWeb</h2>

        <div className='grid md:grid-cols-4 gap-6'>
          {steps.map((step, i) => (
            <div key={step} className='bg-white rounded-xl p-6 shadow'>
              <div className='text-indigo-600 font-bold text-lg mb-2'>Step {i + 1}</div>
              <p className='font-medium'>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
