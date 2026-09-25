"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Link from "next/link";
import { ProfilePortrait } from "@/components/ProfilePortrait";

const links = [
  { label: "GitHub", href: "https://github.com/by48y", detail: "CODE ARCHIVE ↗", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aby-amanullah/", detail: "SOCIAL LINK ↗", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:aby25ti@mahasiswa.pcr.ac.id", detail: "DIRECT CHANNEL ↗", icon: Mail },
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
    <main className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-12 overflow-hidden bg-transparent px-6 py-24 text-slate-900 lg:grid-cols-12 md:px-14">
      <Link
        className="clip-slant absolute left-6 top-6 z-10 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-p3-cyan hover:text-p3-dark"
        href="/"
      >
        RETURN
      </Link>

      <section className="sticky top-24 flex min-h-[55vh] items-center justify-center overflow-hidden bg-p3-dark lg:col-span-4 lg:min-h-[calc(100vh-12rem)]">
        <div className="absolute h-[72vw] w-[72vw] max-w-[680px] rotate-[-12deg] skew-x-[-12deg] bg-p3-cyan opacity-90" />
        <div className="relative w-full max-w-sm px-8">
          <ProfilePortrait />
        </div>
      </section>

        <motion.section
          className="flex flex-col bg-p3-blue px-8 py-12 lg:col-span-8 lg:px-16 lg:py-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full flex-col">
            <p className="mb-8 text-xs font-bold italic tracking-[0.25em] text-p3-cyan">
              SOCIAL LINK // CHARACTER STATUS
            </p>
            <h1 className="mb-12 border-b border-slate-300/30 pb-4 text-6xl font-bold italic leading-[0.8] text-p3-cyan text-glow md:text-8xl">
              Aby
              <br />
              Amanullah
            </h1>

            <div className="border-y border-p3-cyan/40 py-6">
              <p className="text-xs font-bold tracking-[0.2em] text-p3-cyan">CURRENT AFFILIATIONS</p>
              <div className="mt-4 flex flex-col gap-4">
                {affiliations.map((affiliation, index) => (
                  <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className="-skew-x-6 bg-p3-dark/20 px-4 py-2 text-xl font-black italic"
                    initial={{ opacity: 0, x: 80 }}
                    key={affiliation}
                    transition={{ delay: index * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 10, color: "#00E5FF" }}
                  >
                    <span className="inline-block skew-x-6">{affiliation}</span>
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-row items-center justify-center gap-8 border-t-2 border-p3-cyan/50 pt-8">
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
    </main>
  );
}
