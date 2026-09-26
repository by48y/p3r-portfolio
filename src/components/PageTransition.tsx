"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] pointer-events-none p3-page-transition"
        key={`${pathname}-overlay`}
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="p3-page-transition__slash" />
      </motion.div>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: -20, skewX: "-5deg" }}
        animate={{ opacity: 1, x: 0, skewX: "0deg" }}
        transition={{ delay: 0.2, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
