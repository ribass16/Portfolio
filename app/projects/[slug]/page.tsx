import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content/projects";
import { SITE_URL, FULL_NAME } from "@/lib/data/contact";
import { ProjectPageClient } from "./project-page-client";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.pt.name} - ${FULL_NAME}`;
  const description = project.pt.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 750, alt: project.pt.name }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectPageClient project={project} />;
}
