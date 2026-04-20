import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

type Props = {
  services: Service[];
};

export function ServiceDetailRelated({ services }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.24 }}
      className="space-y-5"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Mas soluciones
          </p>
          <h2 className="font-heading text-2xl font-semibold">
            Otras formas en las que podemos ayudarte
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={PATHS.serviceDetail(service.slug)}
            className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-foreground/20"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <div className="p-5">
              <h3 className="font-heading text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {service.shortDescription}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Ver detalle
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
