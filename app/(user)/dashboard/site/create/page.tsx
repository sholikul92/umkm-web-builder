import FormCreateSite from "./_components/FormCreateSite";

export default function CreateSite() {
  return (
    <section className='bg-gray-50'>
      <section className='max-w-4xl mx-auto px-4 py-10 space-y-10'>
        <section>
          <h1 className='text-3xl font-bold mb-2'>Buat Website Bisnis Anda</h1>
          <p className='text-gray-600'>Lengkapi informasi di bawah ini. Website dapat diedit kembali setelah dipublikasikan.</p>
        </section>

        <FormCreateSite />
      </section>
    </section>
  );
}
