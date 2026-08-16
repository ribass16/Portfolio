"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { contact, FULL_NAME } from "@/lib/data/contact";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {FULL_NAME}. {dict.footer.rights}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            aria-label={dict.contact.email}
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.contact.github}
            className="transition-colors hover:text-foreground"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.contact.linkedin}
            className="transition-colors hover:text-foreground"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
