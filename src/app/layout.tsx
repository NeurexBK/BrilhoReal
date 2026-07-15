import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brilho Real — Limpeza que transforma.",
  description:
    "Especialistas em higienização premium: residencial, automóvel e marítima. Sofás, colchões, tapetes, interiores auto, barcos, lanchas e iates. Orçamento gratuito em Portugal.",
  openGraph: {
    title: "Brilho Real — Limpeza que transforma.",
    description:
      "Higienização premium residencial, automóvel e marítima em Portugal.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
