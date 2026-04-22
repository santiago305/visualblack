import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { PATHS } from "@/routes/paths";

const HeroScene = lazy(() => import("@/shared/components/hero/HeroScene"));

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-3rem)] items-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="container-vb relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[700px]"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 h-px bg-foreground"
          />

          <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Creamos
            <br />
            <span className="text-muted-foreground">experiencias</span>
            <br />
            digitales
          </h1>

          <p className="mt-4 max-w-[380px] text-sm leading-relaxed text-muted-foreground">
            Marketing digital y desarrollo web de alto impacto. Transformamos ideas en resultados medibles.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to={PATHS.contact}
              className="inline-flex items-center rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Iniciar proyecto
            </Link>
            {/* <Link
              to={PATHS.portfolio}
              className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Ver portafolio
            </Link> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            style={{ writingMode: "vertical-rl" }}
          >
            Marketing / Desarrollo / Estrategia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
