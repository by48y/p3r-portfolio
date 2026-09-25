"use client";

import { DynamicCursor } from "@/components/DynamicCursor";
import { P3Menu } from "@/components/P3Menu";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-p3-dark">
      <DynamicCursor />
      <aside className="flex w-1/3 min-w-0 items-center bg-p3-dark px-8 lg:px-16">
        <P3Menu />
      </aside>
      <main className="grid flex-1 grid-cols-1 gap-6 bg-p3-dark p-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioData.map((project) => (
          <PortfolioCard
            description={project.description}
            id={project.id}
            key={project.id}
            techStack={project.techStack}
            title={project.title}
          />
        ))}
      </main>
    </div>
  );
}
