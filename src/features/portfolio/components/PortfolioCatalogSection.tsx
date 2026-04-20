import { useState } from "react";

import { categories, projects } from "@/data/projects";
import SectionHeading from "@/shared/components/SectionHeading";

import { PortfolioFilters } from "./PortfolioFilters";
import { PortfolioGrid } from "./PortfolioGrid";

const ITEMS_PER_PAGE = 10;

export function PortfolioCatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((current) => current + ITEMS_PER_PAGE);
  };

  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading
          label="Portafolio"
          title="Nuestros proyectos"
          description="Explora nuestro trabajo y descubre como transformamos ideas en resultados."
        />

        <PortfolioFilters
          activeCategory={activeCategory}
          categories={categories}
          onSelect={handleCategoryChange}
        />

        <PortfolioGrid projects={visibleProjects} />

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Cargar mas proyectos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
