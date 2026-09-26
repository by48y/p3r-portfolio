import Link from "next/link";

export function ReturnButton() {
  return (
    <Link
      className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-slate-900 text-white font-bold tracking-widest uppercase text-sm skew-x-[-12deg] border-l-4 border-p3-cyan hover:bg-p3-cyan hover:text-slate-900 transition-colors duration-300 group cursor-pointer relative z-50"
      href="/"
    >
      <span className="block skew-x-[12deg]">◄ RETURN TO BASE</span>
    </Link>
  );
}
