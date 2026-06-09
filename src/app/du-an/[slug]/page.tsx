import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getRelatedProjects, categoryLabels } from "@/lib/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/portfolio/ProjectCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Không tìm thấy" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[55vh] min-h-[400px] md:h-[70vh] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 md:left-10">
          <Link
            href="/du-an"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} /> Tất Cả Dự Án
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
            {categoryLabels[project.category]}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Meta info */}
            <AnimatedSection className="md:col-span-3" direction="right">
              <div className="space-y-6 border-l-2 border-gold pl-6 sticky top-28">
                {[
                  { label: "Loại Công Trình", value: project.clientType },
                  { label: "Phong Cách", value: project.style },
                  { label: "Diện Tích", value: project.area },
                  { label: "Năm", value: String(project.year) },
                  { label: "Địa Điểm", value: project.location },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-charcoal">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection className="md:col-span-9" direction="left" delay={0.1}>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                Mô Tả Dự Án
              </p>
              <p className="font-sans text-base text-charcoal/70 leading-loose mb-8 max-w-2xl">
                {project.description}
              </p>

              {/* Design tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} className={i === 0 ? "sm:col-span-2" : ""}>
                    <div className={`relative overflow-hidden bg-warm-gray ${i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                      <Image
                        src={img}
                        alt={`${project.title} — ảnh ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-cream py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-12">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-2">
                Cùng Danh Mục
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
                Dự Án Liên Quan
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="mt-12">
              <Link
                href="/du-an"
                className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Xem Tất Cả Dự Án <ArrowRight size={13} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
