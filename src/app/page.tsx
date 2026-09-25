"use client";

import { DynamicCursor } from "@/components/DynamicCursor";
import { P3Menu } from "@/components/P3Menu";
import { PortfolioCard } from "@/components/PortfolioCard";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-[clamp(220px,25vw,320px)_minmax(0,1fr)] overflow-hidden bg-p3-dark">
      <DynamicCursor />
      <aside className="flex min-h-0 items-center bg-p3-dark px-6 py-8 lg:px-10">
        <P3Menu />
      </aside>
      <main className="min-w-0 overflow-y-auto bg-p3-dark p-6 lg:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </main>
    </div>
  );
}
