"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { P3Menu } from "@/components/P3Menu";

const tags = [
  "PROGRAMMER",
  "DESIGNER",
  "PHOTOGRAPHER",
];

export default function Home() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[clamp(220px,25vw,320px)_minmax(0,1fr)] bg-transparent text-slate-900">
      <aside className="flex min-h-0 items-center bg-transparent px-6 py-8 lg:px-10">
        <P3Menu />
      </aside>
      <main className="flex min-w-0 items-center bg-transparent px-6 py-20 lg:px-10 lg:py-24">
        <motion.section
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -48 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.h1
            className="-skew-x-6 text-6xl font-black italic uppercase leading-[0.8] tracking-[-0.06em] text-p3-blue text-glow md:text-8xl"
            variants={{
              hidden: { opacity: 0, x: -80, skewX: "-12deg" },
              visible: { opacity: 1, x: 0, skewX: "-6deg" },
            }}
          >
            Aby Amanullah
          </motion.h1>
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {tags.map((tag) => (
              <motion.div
                className="skew-x-[-12deg] bg-slate-900 px-6 py-2 text-sm font-black italic uppercase tracking-wider text-cyan-400 shadow-lg"
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 space-y-5 border-l-8 border-p3-blue bg-white/75 p-6 text-base leading-relaxed text-slate-700 shadow-lg backdrop-blur-sm md:p-8"
            variants={{
              hidden: { opacity: 0, x: -32 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              Berawal dari jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 2
              Pekanbaru, ketertarikan saya pada dunia pemrograman dan desain
              mulai tumbuh. Hobi bermain game—terutama kekaguman saya pada
              estetika UI/UX seri Persona—menginspirasi saya untuk
              menggabungkan kode dan seni visual. Bagi saya, merancang dan
              membangun website bukan sekadar tugas, melainkan sebuah taman
              bermain yang menyenangkan.
            </p>
            <p>
              Saat ini, saya melanjutkan studi di Politeknik Caltex Riau (PCR).
              Perjalanan ini membawa saya mengeksplorasi kembali fundamental
              pemrograman melalui Python, C++, dan Java, hingga mendalami
              modern web frameworks. Lebih dari sekadar baris kode, saya juga
              bergerak di ranah kreatif; mulai dari mendesain UI website, logo,
              poster, hingga meracik visual editing yang interaktif.
            </p>
          </motion.div>
          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, x: -24 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              className="inline-block -skew-x-6 bg-p3-blue px-8 py-4 font-black italic tracking-[0.12em] text-white shadow-lg transition-colors hover:bg-p3-cyan hover:text-p3-dark"
              href="/portfolio"
            >
              <span className="inline-block skew-x-6">VIEW PORTFOLIO</span>
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
