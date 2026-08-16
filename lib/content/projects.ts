export interface ProjectContent {
  name: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  features: string[];
}

export interface Project {
  slug: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string | null;
  image: string;
  images?: string[];
  featured: boolean;
  pt: ProjectContent;
  en: ProjectContent;
}

export const projects: Project[] = [
  {
    slug: "base-monitor",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Brevo"],
    githubUrl: "https://github.com/[EDITAR]/base-monitor",
    demoUrl: null,
    image: "/images/projects/base1.png",
    images: ["/images/projects/base1.png", "/images/projects/base2.png", "/images/projects/base3.png"],
    featured: true,
    pt: {
      name: "BASE Monitor",
      shortDescription:
        "Plataforma web completa para monitorização de concursos públicos, integrando recolha e processamento de dados, correspondência por CPV, automações e sistema de alertas por email.",
      description:
        "O BASE Monitor é uma aplicação web desenvolvida durante o meu estágio na Helpdesk Público, destinada à monitorização de concursos públicos e envio de alertas personalizados com base em códigos CPV. O projeto integra dados do portal BASE, processa e filtra oportunidades relevantes e automatiza o envio de notificações aos utilizadores.",
      challenges: [
        "Processar e organizar grandes volumes de concursos públicos",
        "Implementar a correspondência entre concursos e códigos CPV",
        "Integrar diferentes APIs e serviços externos",
        "Garantir a deduplicação e consistência dos dados",
        "Automatizar a recolha de concursos e envio de notificações",
      ],
      features: [
        "Monitorização e pesquisa de concursos públicos",
        "Filtragem e correspondência através de códigos CPV",
        "Gestão de subscrições e alertas personalizados",
        "Processamento e deduplicação automática de concursos",
        "Envio automático de emails",
        "Exportação de dados para CSV, XLSX e PDF",
      ],
    },
    en: {
      name: "BASE Monitor",
      shortDescription:
        "Complete web platform for monitoring public tenders, with data collection and processing, CPV matching, automation and email alerts.",
      description:
        "BASE Monitor is a web application developed during my internship at Helpdesk Público, focused on monitoring public tenders and sending personalized alerts based on CPV codes. The project integrates data from the BASE portal, processes and filters relevant opportunities, and automates notification delivery to users.",
      challenges: [
        "Processing and organizing large volumes of public tenders",
        "Implementing matching between tenders and CPV codes",
        "Integrating different APIs and external services",
        "Ensuring data deduplication and consistency",
        "Automating tender collection and notification delivery",
      ],
      features: [
        "Public tender monitoring and search",
        "Filtering and matching through CPV codes",
        "Subscription management and personalized alerts",
        "Automatic processing and deduplication of tenders",
        "Automatic email delivery",
        "Data export to CSV, XLSX and PDF",
      ],
    },
  },
  {
    slug: "carpoint",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/ribass16/FinalProject",
    demoUrl: null,
    image: "/images/projects/dashboard_carp.png",
    images: ["/images/projects/carpoint1.png", "/images/projects/carpoint2.png", "/images/projects/dashboard_carp.png"],
    featured: true,
    pt: {
      name: "CarPoint",
      shortDescription: "Plataforma web moderna para gestão e visualização de veículos de um stand automóvel.",
      description:
        "CarPoint é uma plataforma web moderna para gestão e visualização de veículos de um stand automóvel. Permite aos clientes explorar o inventário, interagir com os veículos e agendar visitas, enquanto fornece ao administrador um painel completo de controlo.",
      challenges: [
        "Estruturar uma experiência clara para clientes e administrador",
        "Organizar o inventário de forma visual e fácil de consultar",
        "Criar uma base sólida para futuras funcionalidades de gestão",
      ],
      features: [
        "Exploração do inventário de veículos",
        "Interação com detalhes dos veículos",
        "Agendamento de visitas",
        "Painel de administração para controlo da plataforma",
      ],
    },
    en: {
      name: "CarPoint",
      shortDescription: "Modern web platform for managing and displaying a car dealership inventory.",
      description:
        "CarPoint is a modern web platform for managing and displaying a car dealership's vehicle inventory. It allows customers to browse the inventory, interact with vehicles and schedule visits, while giving the administrator a complete control panel.",
      challenges: [
        "Structuring a clear experience for both customers and the administrator",
        "Organizing the inventory in a visual and easy-to-browse way",
        "Creating a solid base for future management features",
      ],
      features: [
        "Vehicle inventory browsing",
        "Vehicle detail interactions",
        "Visit scheduling",
        "Admin panel for platform control",
      ],
    },
  },
  {
    slug: "job-finder",
    tech: ["n8n", "JavaScript", "Node.js"],
    githubUrl: "https://github.com/ribass16/job-search-automation",
    demoUrl: null,
    image: "/images/projects/n8n.png",
    images: ["/images/projects/n8n.png", "/images/projects/execel.png"],
    featured: true,
    pt: {
      name: "Job Search Automation",
      shortDescription: "Automação em n8n para pesquisar, filtrar e organizar vagas de desenvolvimento de software.",
      description:
        "A procura do primeiro emprego na área de desenvolvimento de software pode tornar-se repetitiva, porque as oportunidades surgem diariamente em várias plataformas. Para resolver esse problema, criei um workflow em n8n que automatiza a parte mais repetitiva da pesquisa: recolher vagas, verificar critérios relevantes, eliminar duplicados, calcular compatibilidade e organizar os resultados de forma útil.",
      challenges: [
        "Recolher oportunidades de diferentes plataformas sem depender de pesquisa manual",
        "Filtrar vagas por experiência, localização, tecnologia e tipo de regime",
        "Deduplicar resultados e atribuir scoring às oportunidades mais relevantes",
      ],
      features: [
        "Pesquisa automática de oportunidades em várias plataformas",
        "Filtragem por perfil júnior, tecnologias, localização e regime",
        "Eliminação de duplicados e ordenação por scoring",
        "Exportação final para Excel para acompanhamento das candidaturas",
      ],
    },
    en: {
      name: "Job Search Automation",
      shortDescription: "n8n automation that searches, filters and organizes software development jobs.",
      description:
        "Looking for a first job in software development quickly becomes repetitive because new opportunities appear every day across different platforms. To solve that, I created an n8n workflow that automates the most repetitive part of the search: collecting jobs, checking relevant criteria, removing duplicates, scoring compatibility and organizing the results in a useful way.",
      challenges: [
        "Collecting opportunities from different platforms without relying on manual search",
        "Filtering jobs by experience, location, technology and work model",
        "Deduplicating results and scoring the most relevant opportunities",
      ],
      features: [
        "Automatic job search across multiple platforms",
        "Filtering by junior profile, technologies, location and work model",
        "Duplicate removal and scoring-based sorting",
        "Excel export for tracking applications",
      ],
    },
  },
];
