"use client";

import { motion } from "framer-motion";
import { P3Menu } from "@/components/P3Menu";

const subtitle = [
  "Data Science,",
  "Server Architecture",
  "& Interactive Experiences",
];

export default function Home() {
  return (
    <div className="grid h-screen min-h-screen w-full grid-cols-[clamp(220px,25vw,320px)_minmax(0,1fr)] overflow-hidden bg-transparent text-slate-900">
      <aside className="flex min-h-0 items-center bg-transparent px-6 py-8 lg:px-10">
        <P3Menu />
      </aside>
      <main className="flex min-w-0 items-center bg-transparent p-6 lg:p-10">
        <motion.section
          className="max-w-5xl"
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
          <motion.p
            className="text-xs font-bold italic tracking-[0.25em] text-p3-blue"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            ABY AMANULLAH // PORTFOLIO
          </motion.p>
          <motion.h1
            className="mt-5 -skew-x-6 text-7xl font-black italic uppercase leading-[0.8] tracking-[-0.06em] text-p3-blue text-glow md:text-[clamp(6rem,14vw,13rem)]"
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Aby
            <br />
            Amanullah
          </motion.h1>
          <div className="mt-10 grid gap-2 text-xl font-bold italic text-slate-700 md:text-3xl">
            {subtitle.map((line) => (
              <motion.p
                key={line}
                variants={{
                  hidden: { opacity: 0, x: -32 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
