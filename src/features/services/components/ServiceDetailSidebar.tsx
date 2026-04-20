import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

type Props = {
  service: Service;
};

export function ServiceDetailSidebar({ service }: Props) {
  return (
    <div className="space-y-6">
      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="rounded-2xl border border-border bg-secondary/35 p-6 md:p-8"
      >
        <h2 className="font-heading text-2xl font-semibold">
          Beneficios para tu negocio
        </h2>

        <ul className="mt-5 space-y-4">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.16 }}
        className="rounded-2xl border border-border bg-background p-6 md:p-8"
      >
        <h3 className="font-heading text-xl font-semibold">Ideal para</h3>

        <div className="mt-5 space-y-3">
          {service.idealFor.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-secondary/25 px-4 py-3 text-sm text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="overflow-hidden rounded-2xl border border-border bg-foreground text-background"
      >
        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-background/70">
            Siguiente paso
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold">
            Conversemos sobre tu proyecto
          </h3>
          <p className="mt-3 text-sm leading-7 text-background/80 md:text-base">
            Si esta solucion encaja con lo que necesitas, podemos convertirla en
            una propuesta clara, funcional y alineada a tus objetivos.
          </p>
          <Link
            to={PATHS.contactWithService(service.slug)}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Ir a contacto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.aside>
    </div>
  );
}
