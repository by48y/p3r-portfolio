"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 bg-p3-blue"
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, x: -50, skewX: "-5deg" }}
        animate={{ opacity: 1, x: 0, skewX: "0deg" }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
