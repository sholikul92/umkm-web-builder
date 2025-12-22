import SignOutButton from "./SignOutButton";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Image src='/logo.png' alt='logo ALTWeb' width={50} height={50} />
          <div className='text-2xl font-bold text-primary'>
            ALT<span className='text-accent'>Web</span>
          </div>
        </div>
        <div className='flex items-center gap-4 text-sm'>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
