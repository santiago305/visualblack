import type { Project } from "@/data/projects";
import ProjectCard from "@/features/portfolio/components/ProjectCard";

type Props = {
  projects: Project[];
};

export function PortfolioGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
