"use client";

import { motion } from "framer-motion";

type PortfolioCardProps = {
  title: string;
  description: string;
  techStack: string[];
};

export function PortfolioCard({
  title,
  description,
  techStack,
}: PortfolioCardProps) {
  return (
    <motion.article
      className="min-h-64 w-full border border-white/50 bg-white/75 p-px text-slate-900 shadow-lg backdrop-blur-sm transition-shadow"
      initial={{ scale: 1, boxShadow: "0 0 0 rgba(0, 229, 255, 0)" }}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 1.5rem) 0, 100% 1.5rem, 100% 100%, 0 100%)",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 28px rgba(0, 229, 255, 0.75)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div
        className="flex min-h-64 flex-col border border-white/50 bg-white/75 backdrop-blur-sm"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 1.5rem) 0, 100% 1.5rem, 100% 100%, 0 100%)",
        }}
      >
        <div className="flex h-1/2 min-h-40 items-center justify-center bg-slate-200 text-4xl text-slate-400">
          +
        </div>
        <div className="flex min-h-40 flex-1 flex-col p-6">
          <h2 className="text-2xl font-bold uppercase italic">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {techStack.map((technology) => (
              <span
                className="-skew-x-6 bg-sky-100 px-3 py-1 text-xs font-bold text-slate-800"
                key={technology}
              >
                <span className="inline-block skew-x-6">{technology}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
