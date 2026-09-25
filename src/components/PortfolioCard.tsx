"use client";

import { motion } from "framer-motion";

export function PortfolioCard() {
  return (
    <motion.article
      aria-hidden="true"
      className="min-h-64 w-full bg-p3-dark/80 p-px text-white shadow-none transition-shadow"
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
        className="h-full min-h-64 border border-p3-cyan bg-p3-dark/80"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 1.5rem) 0, 100% 1.5rem, 100% 100%, 0 100%)",
        }}
      />
    </motion.article>
  );
}
