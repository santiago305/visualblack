import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import type { Project } from "@/data/projects";
import { PATHS } from "@/routes/paths";

import { PortfolioDetailSummary } from "./PortfolioDetailSummary";

type Props = {
  project: Project;
};

export function PortfolioDetailHeader({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to={PATHS.portfolio}
        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Portafolio
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[3/4] h-full w-full object-cover lg:aspect-auto"
          />
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.category.map((category) => (
              <span
                key={category}
                className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>

          <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
            <span>Cliente: {project.client}</span>
            <span>Ano: {project.year}</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <PortfolioDetailSummary project={project} />
        </div>
      </div>
    </motion.div>
  );
}
