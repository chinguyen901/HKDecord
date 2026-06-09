"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { categoryLabels } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/du-an/${project.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="aspect-[4/3] relative overflow-hidden bg-warm-gray">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-charcoal/50 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-sans text-white text-[10px] tracking-[0.35em] uppercase border border-white/80 px-5 py-2.5">
            Xem Chi Tiết
          </span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-1">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-1.5">
          {categoryLabels[project.category]} &mdash; {project.year}
        </p>
        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-gold transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <p className="font-sans text-xs text-charcoal/45 mt-1">
          {project.location} &bull; {project.area}
        </p>
      </div>
    </Link>
  );
}
