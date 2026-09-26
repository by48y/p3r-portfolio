"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { ReturnButton } from "@/components/ReturnButton";

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
    <main className="mx-auto w-full max-w-6xl pt-20 px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-slate-900">
      <div className="col-span-full">
        <ReturnButton />
      </div>

      <section className="flex items-center justify-center md:col-span-4">
        <div className="relative w-full">
          <ProfilePortrait />
        </div>
      </section>

      <motion.section
        className="flex flex-col justify-center md:col-span-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-8 text-xs font-bold italic tracking-[0.25em] text-p3-cyan">
          SOCIAL LINK // CHARACTER STATUS
        </p>
        <h1 className="mb-8 border-b-2 border-p3-cyan pb-4 text-6xl font-bold italic leading-[0.8] text-p3-cyan text-glow md:text-8xl">
          Aby
          <br />
          Amanullah
        </h1>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-p3-cyan">CURRENT AFFILIATIONS</p>
          <div className="mt-4 flex flex-col gap-6">
            {affiliations.map((affiliation, index) => (
              <motion.p
                animate={{ opacity: 1, x: 0 }}
                className="border-l-2 border-p3-cyan/50 pl-4 text-xl font-black italic"
                initial={{ opacity: 0, x: 80 }}
                key={affiliation}
                transition={{ delay: index * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 15, color: "#ffffff" }}
              >
                {affiliation}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-row items-center justify-center gap-8 border-t-2 border-p3-cyan/50 pt-8">
          {links.map((link) => (
            <motion.a
              className="group flex flex-col items-center gap-2 text-white transition-colors hover:text-p3-cyan"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              whileHover={{ color: "#00e5ff" }}
            >
              <span className="relative block p-2">
                <span className="absolute inset-0 rounded-full border border-p3-cyan opacity-0 transition-opacity duration-200 group-hover:animate-ping group-hover:opacity-100" />
                <motion.span
                  className="relative block"
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <link.icon size={40} />
                </motion.span>
              </span>
              <span className="text-[10px] tracking-widest text-white/60 group-hover:text-p3-cyan">
                {link.detail}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
