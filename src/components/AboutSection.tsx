"use client";

import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export function AboutSection() {
  return (
    <motion.section
      className="mt-12 grid gap-10 bg-white p-6 text-slate-900 shadow-md md:grid-cols-[0.8fr_1.2fr] md:p-10"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <div
        aria-label="Profile image placeholder"
        className="min-h-72 bg-slate-200"
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)",
        }}
      />

      <div className="space-y-8 md:pt-8">
        <motion.div variants={contentVariants}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-p3-blue">
            About // 01
          </p>
          <h2 className="mt-3 text-4xl font-bold">Biography placeholder</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
            A short biography placeholder for introducing the person behind
            the portfolio.
          </p>
        </motion.div>

        <motion.div variants={contentVariants}>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Skill one", "Skill two", "Skill three"].map((skill) => (
              <span
                className="-skew-x-12 bg-sky-100 px-3 py-2 text-sm font-semibold text-slate-800"
                key={skill}
              >
                <span className="inline-block skew-x-12">{skill}</span>
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={contentVariants}>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Experience / Education
          </h3>
          <p className="mt-3 text-slate-600">
            Experience or education placeholder.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
