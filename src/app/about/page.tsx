import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24 text-slate-900 md:px-14">
      <Link
        className="clip-slant fixed left-6 top-6 z-10 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-p3-cyan hover:text-p3-dark"
        href="/"
      >
        RETURN
      </Link>

      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold italic tracking-[0.25em] text-p3-blue">
          PROFILE // CHARACTER STATUS
        </p>
        <h1 className="mt-4 -skew-x-6 text-6xl font-bold italic uppercase leading-none text-p3-blue text-glow md:text-8xl">
          About
        </h1>
        <div className="mt-16 grid min-h-96 gap-8 md:grid-cols-2" />
      </div>
    </main>
  );
}
