"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const x = useSpring(useMotionValue(-100), {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });
  const y = useSpring(useMotionValue(-100), {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsMounted(true);

    const isClickable = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest("a, button, .clickable"));
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleMouseOver = (event: MouseEvent) => {
      setIsHoveringClickable(isClickable(event.target));
    };
    const handleMouseOut = (event: MouseEvent) => {
      setIsHoveringClickable(isClickable(event.relatedTarget));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [x, y]);

  if (!isMounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-7 w-7 bg-[#00e5ff]"
      animate={{
        scale: isHoveringClickable ? 2.5 : 1,
        borderStyle: isHoveringClickable ? "dashed" : "solid",
        borderWidth: isHoveringClickable ? 1 : 0,
        mixBlendMode: isHoveringClickable ? "difference" : "normal",
      }}
      style={{
        left: x,
        top: y,
        clipPath: "polygon(0 0, 100% 52%, 48% 62%, 28% 100%)",
      }}
    />
  );
}
