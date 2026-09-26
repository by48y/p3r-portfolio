"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfilePortrait() {
  return (
    <motion.div
      className="group relative w-full aspect-[3/4] overflow-hidden rounded-lg border-2 border-slate-800"
      whileHover={{
        scale: 1.05,
        filter: "drop-shadow(0 0 24px rgba(0, 229, 255, 0.85))",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Image
        alt="Aby Amanullah"
        className="object-cover grayscale contrast-125 transition-[filter] duration-300 group-hover:grayscale-0"
        fill
        src="/images/Portrait_AI.png"
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
}
