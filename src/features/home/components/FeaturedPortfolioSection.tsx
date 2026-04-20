import { Link } from "react-router-dom";

import { projects } from "@/data/projects";
import ProjectCard from "@/features/portfolio/components/ProjectCard";
import { PATHS } from "@/routes/paths";
import SectionHeading from "@/shared/components/SectionHeading";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

export function FeaturedPortfolioSection() {
  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading
          label="Portafolio"
          title="Proyectos destacados"
          description="Una seleccion de nuestros trabajos mas recientes y relevantes."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to={PATHS.portfolio}
            className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todos los proyectos ->
          </Link>
        </div>
      </div>
    </section>
  );
}
