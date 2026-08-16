"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { experience } from "@/lib/content/experience";

export function Experience() {
  const { dict, lang } = useLanguage();

  return (
    <section id="experience" className="container-page py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium uppercase tracking-wide text-accent"
      >
        {dict.experience.eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {dict.experience.title}
      </motion.h2>

      <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
        {experience.map((item, i) => {
          const content = item[lang];
          const Icon = item.type === "education" ? GraduationCap : Briefcase;
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
                <Icon className="h-3.5 w-3.5 text-accent" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {content.role} <span className="text-muted-foreground">· {content.org}</span>
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  {item.period} - {item.location}
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {content.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {content.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="flex items-start gap-2 text-sm text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
