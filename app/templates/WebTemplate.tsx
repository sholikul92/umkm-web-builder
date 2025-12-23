import Image from "next/image";
import { WebsiteBaseTypeInput } from "../types/site.types";

export default function WebTemplate({ data }: { data: WebsiteBaseTypeInput }) {
  return (
    <div className='font-sans text-gray-900'>
      <section className='bg-linear-to-br from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-6xl mx-auto px-6 py-24 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>{data.businessName}</h1>
          <p className='mt-4 text-lg opacity-90'>
            {data.typeofBusiness} · {data.location}
          </p>

          <a
            href={`https://wa.me/${data.whatsapp}`}
            className='inline-block mt-8 bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition'
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </section>

      <section className='max-w-5xl mx-auto px-6 py-20 text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Tentang {data.businessName}</h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          Kami menyediakan produk dan layanan terbaik untuk memenuhi kebutuhan pelanggan dengan kualitas dan pelayanan terpercaya.
        </p>
      </section>

      <section className='bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20'>
          <h2 className='text-2xl font-semibold text-center mb-12'>Produk / Layanan Kami</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {data.products.map((product, index) => (
              <div key={index} className='bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 space-y-2'>
                <div className='w-full h-48 overflow-hidden'>
                  <Image src={URL.createObjectURL(product.image!)} alt='image' width={200} height={200} className='w-full h-fit' />
                </div>

                <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
                <p className='text-sm text-gray-600'>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-indigo-600 text-white'>
        <div className='max-w-5xl mx-auto px-6 py-20 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Siap Order atau Konsultasi?</h2>
          <p className='opacity-90 mb-8'>Klik tombol di bawah untuk terhubung langsung dengan kami.</p>

          <a href={`https://wa.me/${data.whatsapp}`} className='bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold'>
            Chat WhatsApp
          </a>
        </div>
      </section>

      <footer className='bg-gray-900 text-gray-400 text-sm'>
        <div className='max-w-6xl mx-auto px-6 py-8 text-center'>
          © {new Date().getFullYear()} {data.businessName}. Dibuat dengan ALTWeb.
        </div>
      </footer>
    </div>
  );
}
