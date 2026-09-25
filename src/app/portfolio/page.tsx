"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";

const workExperiences = [
  {
    role: "Internship IT Support",
    entity: "PT Perkebunan Nusantara IV Regional 3",
    period: "Agustus 2024 - Desember 2024",
  },
  {
    role: "Internship Data Analyst",
    entity: "Telkom Sudirman & Telkom Akses",
    period: "",
  },
  {
    role: "Member",
    entity: "UKM Computer Security Incident Response Team (CSIRT)",
    period: "",
  },
  {
    role: "Pengurus / Member",
    entity: "UKM Caltex Techno Scientist (CTS)",
    period: "2026",
  },
  { role: "Tim Dokum", entity: "ISO PCR 2026", period: "2026" },
  { role: "Tim Dokum", entity: "STS 2026", period: "2026" },
  {
    role: "Participant / Committee",
    entity: "CyberConnect CSIRT PCR X ERC UNRI 2026",
    period: "2026",
  },
];

const projectsData = [
  {
    title: "Membuat LED dengan ARDUINO",
    description: "A hardware project exploring LED control with Arduino.",
    techStack: ["Arduino", "C++", "Hardware"],
  },
  {
    title: 'Design Website "Persona Promotion"',
    description: "A promotional website design inspired by Persona.",
    techStack: ["Figma", "UI/UX", "Web Design"],
  },
  {
    title: "Website Aplikasi Kasir",
    description: "A web-based point-of-sale application concept.",
    techStack: ["Web", "Frontend", "POS"],
  },
  {
    title: "Website Aplikasi Tabungan",
    description: "A web application concept for managing savings.",
    techStack: ["Web", "Frontend", "Finance"],
  },
  {
    title: "Aplikasi Kasir Menggunakan Java",
    description: "A desktop cashier application built with Java.",
    techStack: ["Java", "OOP", "Desktop"],
  },
  {
    title: "Aplikasi Log Pencatatan Flora Dan Fauna",
    description: "A desktop application for recording flora and fauna data.",
    techStack: ["Java", "Data Management", "Desktop"],
  },
  {
    title: "Website Anime List Menggunakan API Jikan",
    description: "An anime listing website powered by the Jikan API.",
    techStack: ["Web", "API", "Frontend"],
  },
  {
    title: "Website Mortal Kombat 1 Promotion",
    description: "A promotional website concept for Mortal Kombat 1.",
    techStack: ["Web", "UI/UX", "Frontend"],
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("experience");

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
          ARCHIVE // PROJECT INDEX
        </p>
        <h1 className="mt-4 -skew-x-6 text-6xl font-bold italic uppercase leading-none text-p3-blue text-glow md:text-8xl">
          Portfolio
        </h1>
        <div className="mt-12 flex flex-wrap gap-4">
          {[
            { id: "experience", label: "WORK EXPERIENCE" },
            { id: "projects", label: "PROJECTS" },
          ].map((tab) => (
            <button
              className={`relative -skew-x-12 px-6 py-3 text-sm font-black italic tracking-wider ${
                activeTab === tab.id
                  ? "text-p3-dark"
                  : "bg-transparent text-slate-700"
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {activeTab === tab.id && (
                <motion.span
                  className="absolute inset-0 z-0 bg-p3-cyan"
                  layoutId="active-portfolio-tab"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 inline-block skew-x-12">{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "experience" ? (
          <motion.div
            className="mt-10 grid gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {workExperiences.map((experience) => (
              <motion.article
                className="skew-x-[-4deg] border-l-4 border-p3-cyan bg-slate-900/80 p-5 text-white shadow-lg backdrop-blur-sm"
                key={`${experience.role}-${experience.entity}`}
                variants={{
                  hidden: { opacity: 0, x: -32 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 skew-x-[4deg]">
                  <div>
                    <h2 className="text-xl font-black italic text-p3-cyan">
                      {experience.role}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                      {experience.entity}
                    </p>
                  </div>
                  {experience.period && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                      {experience.period}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectsData.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
