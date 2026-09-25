"use client";

import { motion } from "framer-motion";
import { useP3RSounds } from "@/hooks/useP3RSounds";

type MenuItem = {
  label: string;
  href: string;
};

type SlantedMenuProps = {
  items: MenuItem[];
};

export function SlantedMenu({ items }: SlantedMenuProps) {
  const { playHover } = useP3RSounds();

  return (
    <nav aria-label="Section navigation">
      <ul className="flex flex-col items-start gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <motion.a
              className="group block -skew-x-12 border-l-4 border-transparent bg-p3-dark px-8 py-4 text-lg font-bold italic text-white transition-colors duration-300 hover:border-p3-cyan hover:bg-p3-blue focus-visible:border-p3-cyan focus-visible:bg-p3-blue focus-visible:outline-none"
              href={item.href}
              onMouseEnter={playHover}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <span className="inline-block skew-x-12 transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
