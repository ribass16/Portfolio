"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-provider";
import { projects } from "@/lib/content/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="border-t border-border bg-muted/30">
      <div className="container-page py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-wide text-accent"
        >
          {dict.projects.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {dict.projects.title}
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">{dict.projects.subtitle}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
