export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  period: string;
  location: string;
  pt: { role: string; org: string; description: string; highlights: string[] };
  en: { role: string; org: string; description: string; highlights: string[] };
}

export const experience: ExperienceItem[] = [
  {
    id: "helpdesk-publico",
    type: "work",
    period: "2026",
    location: "Porto, Portugal",
    pt: {
      role: "Estagiário de Desenvolvimento de Software",
      org: "Helpdesk Público",
      description:
        "Estágio curricular focado no desenvolvimento e evolução de uma plataforma web para monitorização automática de concursos públicos. Integrei a equipa responsável pelo BASE Monitor e trabalhei em funcionalidades de frontend, backend e integração com serviços internos.",
      highlights: [
        "Desenvolvimento e evolução da plataforma BASE Monitor",
        "Frontend e backend com Next.js, React, TypeScript, Supabase e PostgreSQL",
        "Ingestão e processamento de dados, matching de CPV, notificações e exportação",
        "Automatização do envio de notificações através de cron jobs e melhorias de UI/UX",
      ],
    },
    en: {
      role: "Software Development Intern",
      org: "Helpdesk Público",
      description:
        "Curricular internship focused on the development and evolution of a web platform for automatically monitoring public tenders. I joined the team responsible for BASE Monitor and worked on frontend, backend and internal service integrations.",
      highlights: [
        "Development and evolution of the BASE Monitor platform",
        "Frontend and backend with Next.js, React, TypeScript, Supabase and PostgreSQL",
        "Data ingestion and processing, CPV matching, notifications and exports",
        "Automated notifications through cron jobs and UI/UX improvements",
      ],
    },
  },
  {
    id: "cesae-digital",
    type: "work",
    period: "2024",
    location: "Porto, Portugal",
    pt: {
      role: "Estagiário de Desenvolvimento Web",
      org: "CESAE Digital",
      description:
        "Estágio curricular focado no desenvolvimento de uma plataforma web utilizando PHP, Laravel, MySQL, HTML e CSS. Participei na implementação de funcionalidades de frontend e backend e na integração com a base de dados.",
      highlights: [
        "Desenvolvimento de uma plataforma web com PHP, Laravel, MySQL, HTML e CSS",
        "Implementação de funcionalidades de frontend e backend",
        "Integração com base de dados MySQL e trabalho colaborativo em equipa",
      ],
    },
    en: {
      role: "Web Development Intern",
      org: "CESAE Digital",
      description:
        "Curricular internship focused on web development using PHP, Laravel, MySQL, HTML and CSS. I contributed to frontend and backend features and database integration.",
      highlights: [
        "Built a web platform with PHP, Laravel, MySQL, HTML and CSS",
        "Implemented frontend and backend features",
        "Integrated with a MySQL database and worked collaboratively in a team",
      ],
    },
  },
  {
    id: "assistencia35",
    type: "work",
    period: "2023",
    location: "Porto, Portugal",
    pt: {
      role: "Estagiário de Informática",
      org: "Assistência35",
      description:
        "Estágio curricular de suporte técnico e informática, com foco no diagnóstico e resolução de problemas em equipamento e software, bem como no apoio aos utilizadores.",
      highlights: [
        "Diagnóstico e reparação de computadores e tablets",
        "Instalação e configuração de hardware e software",
        "Apoio técnico aos utilizadores",
      ],
    },
    en: {
      role: "IT Intern",
      org: "Assistência35",
      description:
        "Curricular internship in technical support and IT, focused on diagnosing and resolving hardware and software issues, as well as supporting users.",
      highlights: [
        "Diagnostics and repair of computers and tablets",
        "Hardware and software installation and setup",
        "Technical support for users",
      ],
    },
  },
];
