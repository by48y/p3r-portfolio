"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { playUISound } from "@/utils/sound";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function P3Menu() {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);
  return (
    <>
      <nav aria-label="Main navigation" className="p3-menu relative z-[50]">
        <span className="p3-menu__label">MENU // 01</span>
        <div className="flex flex-col items-start gap-2">
          {items.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="relative"
                initial={{ opacity: 0, x: -48 }}
                key={item.label}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 24,
                }}
              >
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative block px-6 py-3 font-bold uppercase tracking-widest text-slate-800 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-p3-cyan ${
                    isActive ? "text-p3-cyan" : ""
                  }`}
                  href={item.href}
                  onClick={() => {
                    if (transitioning) return;
                    setTransitioning(true);
                    playUISound("click");
                    window.setTimeout(() => setTransitioning(false), 360);
                  }}
                  onMouseEnter={() => playUISound("hover")}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ x: 10, color: "#00E5FF" }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  >
                    {item.label}
                  </motion.div>
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-p3-cyan"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>
      <motion.div
        aria-hidden="true"
        className="p3-transition pointer-events-none"
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
