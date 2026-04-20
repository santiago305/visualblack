import { motion } from "framer-motion";
import { Check } from "lucide-react";

import type { Service } from "@/features/services/types/service.types";

type Props = {
  service: Service;
};

export function ServiceDetailOverview({ service }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8"
    >
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-foreground/80" />
        <h2 className="font-heading text-2xl font-semibold">
          Que incluye este servicio
        </h2>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
        {service.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {service.deliverables.map((deliverable) => (
          <div
            key={deliverable}
            className="rounded-xl border border-border bg-secondary/35 p-4 transition-colors hover:bg-secondary/55"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-sm leading-6 text-foreground/90">{deliverable}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
