"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
        skewX: "-4deg",
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        skewX: "0deg",
        scale: 1,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
