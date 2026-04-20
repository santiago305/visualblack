import { useParams } from "react-router-dom";

import { projects } from "@/data/projects";
import { PortfolioDetailContent } from "@/features/portfolio";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return <PortfolioDetailContent project={project} />;
}
