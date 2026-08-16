export type Language = "pt" | "en";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    role: string;
    intro: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
    location: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    lookingForTitle: string;
    lookingFor: string[];
    factsTitle: string;
    facts: { label: string; value: string }[];
  };
  tech: {
    eyebrow: string;
    title: string;
    subtitle: string;
    levels: { name: string; level: number; category: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      role: string;
      org: string;
      period: string;
      location: string;
      description: string;
      highlights: string[];
      type: "work" | "education";
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewProject: string;
    liveDemo: string;
    sourceCode: string;
    challengesTitle: string;
    featuresTitle: string;
    techTitle: string;
    backToProjects: string;
    otherTitle: string;
    otherText: string;
    filterAll: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    backToTop: string;
    builtWith: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
}
