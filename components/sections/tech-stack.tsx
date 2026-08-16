"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-provider";
import { techStack, CATEGORY_LABELS, type TechItem } from "@/lib/data/tech";
import { techIcons } from "@/lib/data/tech-icons";

function TechCard({ item, index }: { item: TechItem; index: number }) {
  const { lang } = useLanguage();
  const Icon = techIcons[item.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
        {Icon ? <Icon className="h-5 w-5" /> : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{item.name}</p>
        <p className="text-xs text-muted-foreground">
          {CATEGORY_LABELS[item.category][lang]}
        </p>
      </div>
    </motion.div>
  );
}

export function TechStack() {
  const { dict } = useLanguage();

  return (
    <section id="tech" className="border-t border-border bg-muted/30">
      <div className="container-page py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-wide text-accent"
        >
          {dict.tech.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {dict.tech.title}
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">{dict.tech.subtitle}</p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
