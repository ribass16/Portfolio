"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-provider";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="container-page py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium uppercase tracking-wide text-accent"
      >
        {dict.about.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {dict.about.title}
      </motion.h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          {dict.about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">
              {dict.about.lookingForTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {dict.about.lookingFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="h-fit rounded-xl border border-border bg-card p-6"
        >
          <h3 className="text-sm font-semibold text-foreground">
            {dict.about.factsTitle}
          </h3>
          <dl className="mt-4 space-y-4">
            {dict.about.facts.map((fact, i) => (
              <div key={i} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
