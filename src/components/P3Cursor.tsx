"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function P3Cursor() {
  const x = useSpring(useMotionValue(-40), {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });
  const y = useSpring(useMotionValue(-40), {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.svg
      aria-hidden="true"
      className="pointer-events-none fixed z-[2147483647] h-7 w-7"
      style={{ left: x, top: y }}
      viewBox="0 0 28 28"
    >
      <polygon
        fill="#00E5FF"
        points="2,1 26,13 13,15 8,27"
        stroke="#0A0A0A"
        strokeWidth="1.5"
      />
    </motion.svg>
  );
}
