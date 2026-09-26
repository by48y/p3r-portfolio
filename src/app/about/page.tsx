"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProfilePortrait } from "@/components/ProfilePortrait";

const biography = [
  "Berawal dari jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 2 Pekanbaru, ketertarikan saya pada dunia pemrograman dan desain mulai tumbuh. Hobi bermain game—terutama kekaguman saya pada estetika UI/UX seri Persona—menginspirasi saya untuk menggabungkan kode dan seni visual.",
  "Saat ini, saya melanjutkan studi di Politeknik Caltex Riau (PCR). Perjalanan ini membawa saya mengeksplorasi kembali fundamental pemrograman melalui Python, C++, dan Java, hingga mendalami modern web frameworks dan analisis data secara mendalam.",
  "Bagi saya, merancang dan membangun sistem digital bukan sekadar tugas, melainkan sebuah taman bermain yang menyenangkan di mana saya bisa meracik visual, menganalisis data, dan menyusun arsitektur server secara harmoni.",
];

const languages = ["Java", "Python", "C++", "HTML", "CSS", "JavaScript", "PHP", "TypeScript"];
const tools = ["Figma", "Spline", "Canva", "VSCode"];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-transparent px-6 py-24 text-slate-900 md:px-14">
      <Link
        className="group relative z-[9999] block cursor-pointer pointer-events-auto clip-slant fixed left-6 top-6 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors group-hover:text-p3-cyan hover:bg-p3-cyan hover:text-p3-dark"
        href="/"
      >
        RETURN
      </Link>

      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold italic tracking-[0.25em] text-p3-blue">
          PROFILE // CHARACTER STATUS
        </p>
        <h1 className="mt-4 -skew-x-6 text-6xl font-black italic uppercase leading-none text-p3-blue text-glow md:text-8xl">
          Character Profile
        </h1>
        <div className="mt-16 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <ProfilePortrait />
          <motion.div
            className="space-y-6 border-l-4 border-p3-cyan bg-slate-900/40 p-6 text-slate-100 shadow-lg backdrop-blur-md md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {biography.map((paragraph) => (
              <motion.p
                className="font-sans leading-relaxed"
                key={paragraph}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <h3 className="mt-12 mb-6 border-b-2 border-p3-cyan pb-2 text-xl font-black italic uppercase tracking-widest text-slate-800">
          System Architecture // Tech Stack
        </h3>
        <div
          className="relative flex w-full flex-col gap-4 overflow-hidden py-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-4">
            {[...languages, ...languages].map((lang, index) => (
              <div
                className="skew-x-[-12deg] border border-slate-700 bg-slate-900 px-6 py-2 font-mono text-sm uppercase tracking-wider text-p3-cyan"
                key={`${lang}-${index}`}
              >
                <span className="block skew-x-[12deg]">{lang}</span>
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-4">
            {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <div
                className="skew-x-[-12deg] border border-slate-700 bg-slate-800 px-6 py-2 font-mono text-sm uppercase tracking-wider text-white"
                key={`${tool}-${index}`}
              >
                <span className="block skew-x-[12deg]">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
