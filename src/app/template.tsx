"use client";

import { motion } from "framer-motion";
import { playUISound } from "@/utils/sound";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[99999] bg-p3-blue"
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onAnimationStart={() => playUISound("transition")}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
