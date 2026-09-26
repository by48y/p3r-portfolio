"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-[150vh] z-[999] bg-p3-blue origin-top skew-y-[-5deg] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-150%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </>
  );
}
