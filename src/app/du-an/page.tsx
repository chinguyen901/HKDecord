"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { allProjects, categoryLabels, type ProjectCategory } from "@/lib/projects";

const filters = ["all", "can-ho", "biet-thu", "ban-ve"] as const;
type Filter = (typeof filters)[number];

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
              Portfolio
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-charcoal mb-4">
              Dự Án
            </h1>
            <div className="w-12 h-px bg-gold mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-20 z-30 bg-white border-b border-warm-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`flex-shrink-0 px-5 py-2 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-200 ${
                  active === f
                    ? "bg-gold text-white"
                    : "text-charcoal/60 hover:text-charcoal hover:bg-warm-gray"
                }`}
              >
                {categoryLabels[f as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={Math.min(i * 0.08, 0.4)}>
                <ProjectCard project={project} priority={i < 3} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-sans text-sm text-charcoal/40 tracking-widest">
                Chưa có dự án nào
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
