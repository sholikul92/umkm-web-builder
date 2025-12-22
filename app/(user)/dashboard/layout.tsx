import "@/app/globals.css";
import SiteHeader from "./_components/SiteHeader";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className='bg-gray-50 px-4 py-10 space-y-8'>{children}</main>
    </>
  );
}
