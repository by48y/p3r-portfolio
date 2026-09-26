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
      className="font-mono"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span aria-hidden="true" key={`${letter}-${index}`} variants={character}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
