"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "INITIALIZING SYSTEM...",
  "CONNECTING TO DARK HOUR...",
  "ACCESS GRANTED",
];

export function SystemBoot() {
  const [booting, setBooting] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("system-boot-complete")) {
      setBooting(false);
      return;
    }

    const line = lines[lineIndex];
    const isComplete = text === line;
    const timer = window.setTimeout(() => {
      if (!isComplete) {
        setText(line.slice(0, text.length + 1));
      } else if (lineIndex < lines.length - 1) {
        setLineIndex(lineIndex + 1);
        setText("");
      } else {
        sessionStorage.setItem("system-boot-complete", "true");
        setExiting(true);
      }
    }, isComplete ? 260 : 24);

    return () => window.clearTimeout(timer);
  }, [lineIndex, text]);

  if (!booting) return null;

  return (
    <motion.div
      aria-label="System boot sequence"
      aria-live="polite"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black px-8 font-mono text-sm text-white"
      initial={{ y: 0 }}
      animate={{ y: exiting ? "-100%" : 0 }}
      transition={{ duration: exiting ? 0.6 : 0, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => exiting && setBooting(false)}
    >
      <p>
        <span className="text-white">&gt; </span>
        {text}
        <span className="animate-pulse text-white">_</span>
      </p>
    </motion.div>
  );
}
