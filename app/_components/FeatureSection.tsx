const features = [
  {
    title: "Cepat & Mudah",
    desc: "Website jadi dalam hitungan menit, bukan hari.",
  },
  {
    title: "Desain Profesional",
    desc: "Template modern yang cocok untuk UMKM.",
  },
  {
    title: "Langsung Online",
    desc: "Publish website dan dapatkan link publik.",
  },
];

export default function FeatureSection() {
  return (
    <section className='py-20 px-6'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8'>
        {features.map((f) => (
          <div key={f.title} className='bg-gray-50 rounded-2xl p-8 text-center shadow-sm'>
            <h3 className='font-semibold text-xl mb-2'>{f.title}</h3>
            <p className='text-gray-600'>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
