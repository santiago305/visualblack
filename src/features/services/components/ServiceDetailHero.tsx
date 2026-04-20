import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

type Props = {
  service: Service;
};

export function ServiceDetailHero({ service }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
    >
      <div className="max-w-2xl">
        <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-6xl">
          {service.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          {service.shortDescription}
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/85 md:text-base">
          {service.highlight}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={PATHS.contact}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Solicitar propuesta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-2xl bg-linear-to-br from-white/8 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30">
          <img
            src={service.image}
            alt={service.title}
            className="h-70 w-full object-cover md:h-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
            <div className="rounded-xl border border-white/10 bg-background/70 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Enfoque
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/90 md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
