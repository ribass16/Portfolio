"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { Project } from "@/lib/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectPageClient({ project }: { project: Project }) {
  const { lang, dict } = useLanguage();
  const content = project[lang];
  const gallery = project.images ?? [project.image];
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) => (current === 0 ? gallery.length - 1 : current - 1));
  };

  const nextImage = () => {
    setActiveImage((current) => (current === gallery.length - 1 ? 0 : current + 1));
  };

  return (
    <article className="container-page py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.projects.backToProjects}
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {content.name}
            </h1>
            <p className="mt-2 max-w-xl text-muted-foreground">{content.shortDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* GitHub source button removed */}
            {project.demoUrl && (
              <Button href={project.demoUrl} external>
                {dict.projects.liveDemo}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="relative aspect-[16/9] w-full bg-card">
            <Image
              src={gallery[activeImage]}
              alt={`${content.name} - print ${activeImage + 1}`}
              fill
              className="object-contain"
              priority={activeImage === 0}
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-sm transition-transform hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Imagem seguinte"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-sm transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-border bg-background/80 px-3 py-2 backdrop-blur">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeImage ? "w-6 bg-accent" : "w-2.5 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            {content.description}
          </p>

          <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-foreground">
            {dict.projects.challengesTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {content.challenges.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-fit rounded-xl border border-border bg-card p-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            {dict.projects.featuresTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {content.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
              >
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-foreground">
            {dict.projects.techTitle}
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
