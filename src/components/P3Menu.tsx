"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { playUISound } from "@/utils/sound";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function P3Menu() {
  const pathname = usePathname();
  return (
    <>
      <nav aria-label="Main navigation" className="p3-menu relative z-[50]">
        <span className="p3-menu__label">MENU // 01</span>
        <div className="flex flex-col items-start gap-2">
          {items.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`group relative my-2 flex cursor-pointer items-center overflow-hidden px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-p3-cyan ${
                  isActive ? "text-p3-cyan" : ""
                }`}
                href={item.href}
                key={item.label}
                onClick={() => playUISound("click")}
                onMouseEnter={() => playUISound("hover")}
              >
                <span className="absolute inset-y-0 left-0 z-0 w-1 -translate-x-full bg-p3-cyan transition-transform duration-300 group-hover:translate-x-0" />
                <span
                  className={`z-10 font-black text-2xl uppercase tracking-widest text-slate-800 transition-colors duration-300 group-hover:text-p3-cyan ${
                    isActive ? "text-p3-cyan" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
