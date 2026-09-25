"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function DynamicCursor() {
  const [interactive, setInteractive] = useState(false);
  const x = useSpring(useMotionValue(-100), { stiffness: 500, damping: 35 });
  const y = useSpring(useMotionValue(-100), { stiffness: 500, damping: 35 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setInteractive(Boolean((event.target as HTMLElement).closest("a, button")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.span
      aria-hidden="true"
      className="p3-cursor"
      animate={{ height: interactive ? 42 : 12, width: interactive ? 42 : 12 }}
      style={{ left: x, top: y }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
