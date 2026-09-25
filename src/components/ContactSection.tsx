"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "in" },
  { label: "Email", href: "mailto:hello@example.com", icon: "@" },
];

const itemVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export function ContactSection() {
  return (
    <motion.section
      className="mt-12 grid gap-10 bg-white p-6 text-slate-900 shadow-md md:grid-cols-[1.2fr_0.8fr] md:p-10"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.div variants={itemVariants}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-p3-blue">
          Contact // 01
        </p>
        <h2 className="mt-3 text-4xl font-bold">Start a conversation</h2>
        <form className="mt-8 grid gap-6">
          <input
            aria-label="Name"
            className="clip-slant border-0 border-b-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-p3-blue"
            placeholder="Name"
            type="text"
          />
          <input
            aria-label="Email"
            className="clip-slant border-0 border-b-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-p3-blue"
            placeholder="Email"
            type="email"
          />
          <textarea
            aria-label="Message"
            className="clip-slant min-h-32 resize-y border-0 border-b-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-p3-blue"
            placeholder="Message"
          />
          <motion.button
            className="w-fit -skew-x-12 bg-p3-blue px-8 py-3 font-bold text-white"
            type="submit"
            whileHover={{ backgroundColor: "#00E5FF", color: "#0F172A" }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="inline-block skew-x-12">Send message</span>
          </motion.button>
        </form>
      </motion.div>

      <motion.div className="md:pt-16" variants={itemVariants}>
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
          Find me online
        </h3>
        <div className="mt-5 grid gap-3">
          {socials.map((social) => (
            <a
              className="flex items-center gap-4 border-b border-slate-200 py-4 font-semibold text-slate-800 transition-colors hover:text-p3-blue"
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target={social.href.startsWith("http") ? "_blank" : undefined}
            >
              <span className="grid h-9 w-9 place-items-center bg-slate-100 text-xs font-bold text-p3-blue">
                {social.icon}
              </span>
              {social.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
