import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

type PortfolioPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return portfolioData.map(({ id }) => ({ id }));
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { id } = await params;
  const project = portfolioData.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen w-full bg-transparent text-slate-900">
      <section className="relative flex h-[30vh] min-h-64 items-end overflow-hidden bg-p3-blue px-6 pb-8 pt-16 md:px-14">
        <Link
          className="clip-slant absolute left-6 top-6 bg-p3-dark px-8 py-3 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-p3-cyan hover:text-p3-dark md:left-14"
          href="/"
        >
          RETURN
        </Link>
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-p3-cyan/30" />
        <h1 className="relative max-w-5xl text-4xl font-bold uppercase leading-none text-p3-cyan text-glow md:text-7xl">
          {project.title}
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-[0.7fr_1.3fr] md:px-14 md:py-20">
        <dl className="grid content-start gap-7 border-l-2 border-p3-cyan pl-6">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-p3-cyan">Role</dt>
            <dd className="mt-2 text-xl font-bold">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.2em] text-p3-cyan">Period</dt>
            <dd className="mt-2 text-xl font-bold">{project.period}</dd>
          </div>
        </dl>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75">{project.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.techStack.map((technology) => (
              <span className="border border-p3-cyan bg-p3-blue px-4 py-2 text-sm font-bold uppercase tracking-wide text-p3-cyan" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
