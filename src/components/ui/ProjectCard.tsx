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
      <motion.div
        className="aspect-[4/3] relative overflow-hidden bg-warm-gray"
        animate={{
          boxShadow: hovered
            ? "0 8px 32px rgba(184,150,90,0.22)"
            : "0 0px 0px rgba(184,150,90,0)",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
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
          className="absolute inset-0 bg-charcoal/60 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-white text-[10px] tracking-[0.35em] uppercase border border-white/80 px-5 py-2.5">
            Xem Chi Tiết
          </span>
        </motion.div>
      </motion.div>

      {/* Info */}
      <div className="pt-4 pb-1">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-1.5">
          {categoryLabels[project.category]} &mdash; {project.year}
        </p>
        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-gold transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <p className="font-sans text-xs text-charcoal/45 mt-1 mb-2.5">
          {project.location} &bull; {project.area}
        </p>
        <p className="font-sans text-[11px] text-charcoal/60 leading-relaxed line-clamp-2 mb-3">
          {project.shortDescription}
        </p>
        {/* Design tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/80 border border-gold/30 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
