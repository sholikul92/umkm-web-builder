"use client";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
