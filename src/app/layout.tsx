import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
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
    "Cardápio digital da Gallegos — hambúrgueres, bebidas, açaí e mais. Peça pelo WhatsApp.",
  icons: {
    icon: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gallegos",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F9F4E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-dvh bg-brand-cream font-sans text-brand-brown">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
