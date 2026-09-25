"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="p3-page-transition"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="p3-page-transition__slash" />
      </motion.div>
      {children}
    </>
  );
}
