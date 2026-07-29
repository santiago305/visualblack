import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { servicePreview } from "@/features/home/constants/home.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function ServicesPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-vb relative">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="Soluciones"
            title="Lo que hacemos"
            description="Ofrecemos soluciones integrales que cubren todo el espectro digital con enfoque estrategico, diseño claro y ejecucion orientada a resultados."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicePreview.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="h-full"
            >
              <Link
                to={item.path}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-secondary/70 text-2xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/10 group-hover:bg-background">
                    <span>{item.icon}</span>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-all duration-300 group-hover:border-foreground/10 group-hover:text-foreground">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                  <span>Ver servicio</span>
                  <span className="h-px w-6 bg-foreground/20 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/40" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
