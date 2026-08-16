"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "@/lib/i18n/language-provider";
import { contact } from "@/lib/data/contact";

export function Contact() {
  const { dict } = useLanguage();

  const links = [
    {
      icon: Mail,
      label: dict.contact.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: FaGithub,
      label: dict.contact.github,
      value: contact.githubHandle,
      href: contact.githubUrl,
    },
    {
      icon: FaLinkedin,
      label: dict.contact.linkedin,
      value: contact.linkedinHandle,
      href: contact.linkedinUrl,
    },
  ];

  return (
    <section id="contact" className="container-page py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-wide text-accent"
        >
          {dict.contact.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {dict.contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-sm leading-relaxed text-muted-foreground"
        >
          {dict.contact.subtitle}
        </motion.p>
      </div>

      <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.icon === Mail ? undefined : "_blank"}
            rel={link.icon === Mail ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              <link.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">{link.label}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              {link.value}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
