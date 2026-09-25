import type { Metadata } from "next";
import { Teko } from "next/font/google";
import { P3Background } from "@/components/P3Background";
import { PageTransition } from "@/components/PageTransition";
import { P3Cursor } from "@/components/P3Cursor";
import { Scanlines } from "@/components/Scanlines";
import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Aby Amanullah | Portfolio",
  description:
    "Interactive web portfolio inspired by Persona 3 Reload UI, featuring my work in Data Science, Logic Systems, and Server Architecture",
  openGraph: {
    title: "Aby Amanullah | Portfolio",
    description:
      "Interactive web portfolio inspired by Persona 3 Reload UI, featuring my work in Data Science, Logic Systems, and Server Architecture",
    type: "website",
    themeColor: "#003EDA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${teko.className} bg-p3-dark text-white`}>
        <P3Background />
        <Scanlines />
        <P3Cursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
