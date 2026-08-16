export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "tools";
}

export const CATEGORY_LABELS: Record<TechItem["category"], { pt: string; en: string }> = {
  frontend: { pt: "Frontend", en: "Frontend" },
  backend: { pt: "Backend", en: "Backend" },
  tools: { pt: "Ferramentas", en: "Tools" },
};

export const techStack: TechItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
];
