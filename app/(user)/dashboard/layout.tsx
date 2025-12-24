import "@/app/globals.css";
import { Toaster } from "sonner";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <main>{children}</main>
    </>
  );
}
