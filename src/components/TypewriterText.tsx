"use client";

import { motion } from "framer-motion";

type TypewriterTextProps = {
  text: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const character = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function TypewriterText({ text }: TypewriterTextProps) {
  return (
    <motion.p
      className="whitespace-normal break-words font-mono leading-relaxed"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          aria-hidden="true"
          className="inline"
          key={`${letter}-${index}`}
          variants={character}
        >
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
