"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useP3RSounds } from "@/hooks/useP3RSounds";

const items = [
  { label: "Home", href: "top" },
  { label: "About", href: "about" },
  { label: "Portfolio", href: "work" },
  { label: "Contact", href: "contact" },
];

export function P3Menu() {
  const [active, setActive] = useState("Home");
  const [transitioning, setTransitioning] = useState(false);
  const { playClick, playHover } = useP3RSounds();

  return (
    <>
      <nav aria-label="Main navigation" className="p3-menu">
      <span className="p3-menu__label">MENU // 01</span>
      <div className="flex flex-wrap justify-end gap-2">
        {items.map((item) => {
          const isActive = active === item.label;

          return (
            <motion.button
              className={`group relative block -skew-x-12 overflow-hidden clip-slant bg-p3-dark px-8 py-4 text-2xl font-bold text-white transition-colors hover:bg-p3-blue hover:text-p3-cyan hover:text-glow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-p3-cyan ${
                isActive ? "bg-p3-blue text-p3-cyan text-glow" : ""
              }`}
              key={item.label}
              onClick={() => {
                if (transitioning) return;
                setActive(item.label);
                setTransitioning(true);
                playClick();
                window.setTimeout(() => {
                  window.location.hash = item.href;
                  setTransitioning(false);
                }, 360);
              }}
              onMouseEnter={() => {
                playHover();
              }}
              onFocus={() => setActive(item.label)}
              whileHover={{ backgroundColor: "#003EDA", color: "#00E5FF", x: 10 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <span className="inline-block skew-x-[12deg]">{item.label}</span>
              {isActive && (
                <motion.span
                  className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-p3-cyan"
                  layoutId="p3-menu-active"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      </nav>
      <motion.div
        aria-hidden="true"
        className="p3-transition"
        initial={false}
        animate={transitioning ? "in" : "out"}
        variants={{
          in: { opacity: 1, scaleX: 1 },
          out: { opacity: 0, scaleX: 0 },
        }}
        transition={{ duration: 0.32, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="p3-transition__slash" />
      </motion.div>
    </>
  );
}
