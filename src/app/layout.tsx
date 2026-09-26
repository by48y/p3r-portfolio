import type { Metadata, Viewport } from "next";
import { Teko } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import { Scanlines } from "@/components/Scanlines";
import { SystemBoot } from "@/components/SystemBoot";
import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Aby Amanullah // Digital Portfolio",
  description:
    "Programmer, Data Analyst & Designer bridging the gap between logic and visual aesthetics.",
  openGraph: {
    title: "Aby Amanullah // Digital Portfolio",
    description:
      "Programmer, Data Analyst & Designer bridging the gap between logic and visual aesthetics.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aby Amanullah // Digital Portfolio",
    description:
      "Programmer, Data Analyst & Designer bridging the gap between logic and visual aesthetics.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#00E5FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${teko.className} bg-animated-lines cursor-none text-slate-900`}>
        <SystemBoot />
        <Scanlines />
        <CustomCursor />
        <div className="pointer-events-none fixed bottom-4 right-4 z-40 font-mono text-[10px] tracking-widest text-slate-500">
          LOCATION: PEKANBARU // STATUS: ONLINE
        </div>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
