import type { Project } from "@/data/projects";

import { PortfolioDetailHeader } from "./PortfolioDetailHeader";

type Props = {
  project: Project;
};

export function PortfolioDetailContent({ project }: Props) {
  return (
    <section className="py-16">
      <div className="container-vb">
        <PortfolioDetailHeader project={project} />
      </div>
    </section>
  );
}
