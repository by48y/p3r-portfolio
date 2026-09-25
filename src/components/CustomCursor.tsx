"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  if (!isMounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-7 w-7 bg-[#00e5ff]"
      style={{
        left: x,
        top: y,
        clipPath: "polygon(0 0, 100% 52%, 48% 62%, 28% 100%)",
      }}
    />
  );
}
