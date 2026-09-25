"use client";

import { motion } from "framer-motion";

type PortfolioCardProps = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
};

export function PortfolioCard({
  id,
  title,
  description,
  techStack,
}: PortfolioCardProps) {
  return (
    <motion.article
      className="relative w-full max-w-xs overflow-hidden rounded-sm bg-gray-100 text-p3-dark shadow-2xl"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 2, y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
    >
      <div className="relative h-28 bg-p3-blue">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-p3-dark shadow-inner"
        />
        <div className="absolute -bottom-10 left-5 h-24 w-24 overflow-hidden rounded-sm border-4 border-gray-100 bg-gray-300">
          <span className="flex h-full items-center justify-center text-xs font-bold uppercase tracking-widest text-p3-blue">
            {id.slice(0, 4)}
          </span>
        </div>
      </div>

      <div className="px-5 pb-6 pt-14">
        <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-p3-blue">
          {id}
        </p>
        <h2 className="text-2xl font-bold leading-none">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((technology) => (
            <span
              className="bg-p3-blue px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-p3-cyan"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
