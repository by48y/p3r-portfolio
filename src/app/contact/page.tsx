"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/", detail: "CODE ARCHIVE ↗", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/", detail: "SOCIAL LINK ↗", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:hello@example.com", detail: "DIRECT CHANNEL ↗", icon: Mail },
];

const affiliations = [
  "Politeknik Caltex Riau",
  "PT Perkebunan Nusantara IV Regional 3",
  "Samsung Innovation Campus Batch 8 (Team SLEKERS)",
  "UKM CTS",
  "UKM CSIRT",
  "SMKN 2 Pekanbaru",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-transparent text-slate-900">
      <Link
        className="clip-slant absolute left-6 top-6 z-10 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-p3-cyan hover:text-p3-dark"
        href="/"
      >
        RETURN
      </Link>

      <div className="grid min-h-screen md:grid-cols-2">
        <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-p3-dark md:min-h-screen">
          <div className="absolute h-[72vw] w-[72vw] max-w-[680px] rotate-[-12deg] skew-x-[-12deg] bg-p3-cyan opacity-90" />
          <div className="relative mt-12 flex h-72 w-52 items-end justify-center bg-p3-blue/70 shadow-[0_0_60px_#00e5ff66]">
            <div className="absolute -top-20 h-40 w-40 rounded-full bg-p3-dark" />
            <div className="h-48 w-40 rounded-t-[45%] bg-p3-dark" />
            <span className="absolute bottom-5 text-xs font-bold tracking-[0.2em] text-p3-cyan">
              SUBJECT // 001
            </span>
          </div>
        </section>

        <motion.section
          className="flex items-center bg-p3-blue px-8 py-24 md:px-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full max-w-xl flex-col">
            <p className="mb-8 text-xs font-bold italic tracking-[0.25em] text-p3-cyan">
              SOCIAL LINK // CHARACTER STATUS
            </p>
            <h1 className="text-6xl font-bold italic leading-[0.8] text-p3-cyan text-glow md:text-8xl">
              Aby
              <br />
              Amanullah
            </h1>

            <div className="my-12 border-y border-p3-cyan/40 py-6">
              <p className="text-xs font-bold tracking-[0.2em] text-p3-cyan">CURRENT AFFILIATIONS</p>
              <div className="mt-4 grid gap-3">
                {affiliations.map((affiliation, index) => (
                  <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className="-skew-x-6 bg-p3-dark/20 px-4 py-2 text-xl font-black italic"
                    initial={{ opacity: 0, x: 80 }}
                    key={affiliation}
                    transition={{ delay: index * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="inline-block skew-x-6">{affiliation}</span>
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-row gap-8 pt-8">
              {links.map((link) => (
                <motion.a
                  className="group flex flex-col items-center gap-2 text-white transition-colors hover:text-p3-cyan"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  whileHover={{ color: "#00e5ff" }}
                >
                  <motion.span
                    className="block"
                    whileHover={{ scale: 1.1, skewX: -12 }}
                  >
                    <link.icon size={40} />
                  </motion.span>
                  <span className="text-[10px] tracking-widest text-white/60 group-hover:text-p3-cyan">
                    {link.detail}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
