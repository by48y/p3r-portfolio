"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const biography = [
  "Berawal dari jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 2 Pekanbaru, ketertarikan saya pada dunia pemrograman dan desain mulai tumbuh. Hobi bermain game—terutama kekaguman saya pada estetika UI/UX seri Persona—menginspirasi saya untuk menggabungkan kode dan seni visual.",
  "Saat ini, saya melanjutkan studi di Politeknik Caltex Riau (PCR). Perjalanan ini membawa saya mengeksplorasi kembali fundamental pemrograman melalui Python, C++, dan Java, hingga mendalami modern web frameworks dan analisis data secara mendalam.",
  "Bagi saya, merancang dan membangun sistem digital bukan sekadar tugas, melainkan sebuah taman bermain yang menyenangkan di mana saya bisa meracik visual, menganalisis data, dan menyusun arsitektur server secara harmoni.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-transparent px-6 py-24 text-slate-900 md:px-14">
      <Link
        className="clip-slant fixed left-6 top-6 z-10 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-p3-cyan hover:text-p3-dark"
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
          <div
            aria-label="Portrait placeholder"
            className="min-h-96 -skew-x-6 border-4 border-p3-cyan bg-slate-900/40 shadow-lg backdrop-blur-sm"
          >
            <div className="flex h-full min-h-96 items-end justify-center skew-x-6 p-8">
              <span className="text-xs font-bold tracking-[0.2em] text-p3-cyan">
                PORTRAIT // 001
              </span>
            </div>
          </div>
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
      </div>
    </main>
  );
}
