import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isFromTop = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: isFromTop ? -60 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portafolio/${project.id}`} className="group block">
        <div className="relative overflow-hidden rounded-sm border border-border aspect-3/4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs text-primary-foreground/70 mb-0.5">
              {project.category.join(" · ")}
            </p>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground">
              {project.title}
            </h3>
            <p className="text-xs text-primary-foreground/80 mt-0.5 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
