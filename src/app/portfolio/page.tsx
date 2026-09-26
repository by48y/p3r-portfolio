"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { PortfolioCard } from "@/components/PortfolioCard";
import { playUISound } from "@/utils/sound";

const workExperiences = [
  {
    id: 1,
    role: "Internship IT Support",
    entity: "PT Perkebunan Nusantara IV Regional 3",
    period: "Agustus 2024 - Desember 2024",
    description:
      "Menangani infrastruktur jaringan, troubleshooting perangkat keras dan lunak, serta memastikan kelancaran operasional IT harian perusahaan dengan SLA yang ketat.",
    link: "#",
  },
  {
    id: 2,
    role: "Internship Data Analyst",
    entity: "Telkom Sudirman & Telkom Akses",
    period: "",
    description:
      "Menganalisis dataset perusahaan, menyusun visualisasi data interaktif, dan memberikan insight berbasis metrik untuk mendukung pengambilan keputusan strategis.",
    link: "#",
  },
  {
    id: 3,
    role: "Member",
    entity: "UKM Computer Security Incident Response Team (CSIRT)",
    period: "",
    description:
      "Mempelajari dan mengimplementasikan protokol keamanan siber, analisis kerentanan, serta simulasi mitigasi insiden jaringan.",
    link: "#",
  },
  {
    id: 4,
    role: "Pengurus / Member",
    entity: "UKM Caltex Techno Scientist (CTS)",
    period: "2026",
    description:
      "Merancang logistik acara, menyusun dokumentasi strategis, dan mengeksekusi program kerja yang berfokus pada inovasi teknologi mahasiswa.",
    link: "#",
  },
  {
    id: 5,
    role: "Tim Dokum",
    entity: "ISO PCR 2026",
    period: "2026",
    description:
      "Bertanggung jawab penuh atas pengabadian aset visual, pengeditan media, dan manajemen arsip digital (Google Drive) untuk dokumentasi resmi acara.",
    link: "https://drive.google.com/drive/folders/placeholder",
  },
  {
    id: 6,
    role: "Tim Dokum",
    entity: "STS 2026",
    period: "2026",
    description:
      "Melakukan coverage visual secara real-time, memastikan kualitas estetika foto/video, dan mengelola distribusi media pasca-acara.",
    link: "https://drive.google.com/drive/folders/placeholder",
  },
  {
    id: 7,
    role: "Participant / Committee",
    entity: "CyberConnect CSIRT PCR X ERC UNRI 2026",
    period: "2026",
    description:
      "Berkolaborasi lintas institusi dalam eksekusi acara keamanan siber, mengelola alur komunikasi, dan memastikan kelancaran teknis operasional.",
    link: "#",
  },
  {
    id: 8,
    role: "Scholarship Recipient",
    entity: "Beasiswa Data Science IDCamp 2024",
    period: "2024",
    description:
      "Mengikuti program beasiswa data science yang memvalidasi kemampuan analitik data secara akademis dan profesional.",
    link: "#",
  },
  {
    id: 9,
    role: "Participant",
    entity: "Samsung Innovation Campus & Tim SLEKERS",
    period: "2024",
    description:
      "Mengikuti kompetisi dan program intensif yang mengasah kolaborasi tim, penyelesaian masalah terstruktur, serta daya saing di tingkat nasional.",
    link: "#",
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

const galleryImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/designs/design (${index + 1}).png`,
  alt: `Design ${index + 1}`,
  isBanner: false,
  width: [3375, 3375, 3375, 6250, 6250, 3375, 938, 1440, 312][index],
  height: [6000, 6000, 4219, 2000, 2000, 6000, 938, 3381, 294][index],
}));

function GalleryImage({
  image,
  banner = false,
}: {
  image: (typeof galleryImages)[number];
  banner?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const content = (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-slate-700/50 shadow-md ${
        banner
          ? "group w-full mt-8"
          : "break-inside-avoid inline-block w-full mb-4 group transform-gpu"
      }`}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: loaded ? 1 : 0.7 }}
    >
      {!loaded && <div className="absolute inset-0 animate-pulse bg-slate-950" />}
      <Image
        alt={image.alt}
        className={`relative block h-auto w-full object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
        height={image.height}
        loading="lazy"
        onLoadingComplete={() => setLoaded(true)}
        quality={80}
        src={image.src}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        width={image.width}
      />
    </motion.div>
  );

  return banner ? content : (
    <a href={image.src} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

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
            { id: "gallery", label: "DESIGN GALLERY" },
          ].map((tab) => (
            <MagneticButton key={tab.id}>
              <motion.button
                className={`relative -skew-x-12 px-6 py-3 text-sm font-black italic tracking-wider ${
                  activeTab === tab.id
                    ? "text-p3-dark"
                    : "bg-transparent text-slate-700"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  playUISound("click");
                }}
                onMouseEnter={() => playUISound("hover")}
                type="button"
              >
                {activeTab === tab.id && (
                  <motion.span
                    className="absolute inset-0 z-0 bg-p3-cyan"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 inline-block skew-x-12">{tab.label}</span>
              </motion.button>
            </MagneticButton>
          ))}
        </div>

        {activeTab === "experience" ? (
          <motion.div
            className="mt-10 grid gap-4"
            layout
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {workExperiences.map((experience) => (
              <motion.div
                className="skew-x-[-4deg] border-l-4 border-p3-cyan bg-slate-900/80 text-white shadow-lg backdrop-blur-sm"
                key={`${experience.role}-${experience.entity}`}
                layout
                variants={{
                  hidden: { opacity: 0, x: -32 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <motion.button
                  className="w-full p-5 text-left"
                  layout="position"
                  onClick={() =>
                    setExpandedExp(expandedExp === experience.id ? null : experience.id)
                  }
                  type="button"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3 skew-x-[4deg]" >
                    <motion.div layout="position">
                      <h2 className="text-xl font-black italic text-p3-cyan">
                        {experience.role}
                      </h2>
                      <p className="mt-2 text-sm text-slate-300">
                        {experience.entity}
                      </p>
                    </motion.div>
                    {experience.period && (
                      <motion.span
                        className="text-[10px] font-bold uppercase tracking-widest text-white/70"
                        layout="position"
                      >
                        {experience.period}
                      </motion.span>
                    )}
                  </div>
                </motion.button>
                <AnimatePresence initial={false}>
                  {expandedExp === experience.id && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <motion.div
                        className="mt-1 border-l-2 border-p3-cyan bg-slate-900/40 p-4 text-sm text-slate-300"
                        layout="position"
                      >
                        <motion.p className="skew-x-[4deg]" layout="position">
                          {experience.description}
                        </motion.p>
                        {experience.link !== "#" && (
                          <motion.a
                            className="mt-4 inline-block -skew-x-6 bg-p3-cyan px-4 py-2 text-xs font-black tracking-wider text-p3-dark transition-colors hover:bg-white"
                            href={experience.link}
                            layout="position"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="inline-block skew-x-6">ACCESS ARCHIVE ↗</span>
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : activeTab === "projects" ? (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectsData.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages
                .filter((image) => !image.isBanner)
                .map((image) => <GalleryImage image={image} key={image.src} />)}
            </div>
            {galleryImages
              .filter((image) => image.isBanner)
              .map((image) => (
                <GalleryImage banner image={image} key={image.src} />
              ))}
          </div>
        )}
      </div>
    </main>
  );
}
