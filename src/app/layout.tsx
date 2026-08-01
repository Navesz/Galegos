import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Providers } from "@/components/providers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gallegos | Cardápio Digital",
  description:
    "Cardápio digital da Gallegos — hambúrgueres, bebidas, açaí e sorvete. Peça pelo WhatsApp.",
  icons: {
    icon: "/logo/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-brand-cream font-sans text-brand-brown">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
