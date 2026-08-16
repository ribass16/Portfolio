"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { Button } from "@/components/ui/button";
import { FULL_NAME } from "@/lib/data/contact";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="top"
      className="container-page flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20"
    >
      <motion.p
        custom={0}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <MapPin className="h-3.5 w-3.5" />
        {dict.hero.location}
      </motion.p>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
      >
        {dict.hero.greeting}{" "}
        <span className="text-accent">{FULL_NAME.split(" ")[0]}</span>
        <br />
        {FULL_NAME.split(" ").slice(1).join(" ")}
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl"
      >
        {dict.hero.role}
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {dict.hero.intro}
      </motion.p>

      <motion.div
        custom={4}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <Button href="#projects">
          {dict.hero.ctaProjects}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="/cv-guilherme-ribeiro.pdf" variant="outline" external>
          <Download className="h-4 w-4" />
          {dict.hero.ctaResume}
        </Button>
        <Button href="#contact" variant="ghost">
          {dict.hero.ctaContact}
        </Button>
      </motion.div>
    </section>
  );
}
