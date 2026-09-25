"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/", detail: "CODE ARCHIVE ↗" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", detail: "SOCIAL LINK ↗" },
  { label: "Email", href: "mailto:hello@example.com", detail: "DIRECT CHANNEL ↗" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-100 text-slate-900">
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
          <div className="w-full max-w-xl">
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
              <p className="mt-3 text-2xl font-bold italic">None</p>
            </div>

            <div className="grid gap-3">
              {links.map((link) => (
                <a
                  className="group flex items-center justify-between border-b border-white/30 py-4 text-xl font-bold italic transition-colors hover:border-p3-cyan hover:text-p3-cyan"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span>{link.label}</span>
                  <span className="text-xs tracking-[0.15em] text-white/60 group-hover:text-p3-cyan">
                    {link.detail}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
