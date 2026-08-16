"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { Project } from "@/lib/content/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { lang, dict } = useLanguage();
  const content = project[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={content.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
              {content.name}
            </h3>
          </Link>
          {/* GitHub source button removed */}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {content.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {dict.projects.viewProject}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
