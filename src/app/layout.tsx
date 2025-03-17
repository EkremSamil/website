import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Şirket Adı - Kurumsal Web Sitesi",
  description: "Profesyonel hizmetler ve projeler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
