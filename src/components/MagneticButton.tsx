"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

export function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });
  const y = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set(Math.max(-12, Math.min(12, (event.clientX - (left + width / 2)) * 0.2)));
    y.set(Math.max(-12, Math.min(12, (event.clientY - (top + height / 2)) * 0.2)));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
