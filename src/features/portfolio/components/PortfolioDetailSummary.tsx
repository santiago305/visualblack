import { motion } from "framer-motion";

import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function PortfolioDetailSummary({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-6 space-y-4"
    >
      <div>
        <h3 className="font-heading text-sm font-semibold">El reto</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.challenge}</p>
      </div>

      <div>
        <h3 className="font-heading text-sm font-semibold">La solucion</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.solution}</p>
      </div>

      <div>
        <h3 className="font-heading text-sm font-semibold">Resultados</h3>
        <ul className="mt-1 space-y-1">
          {project.results.map((result) => (
            <li
              key={result}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="text-xs text-foreground">—</span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
