import { motion } from "framer-motion";

export function AboutMissionVisionSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container-vb">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-border bg-background p-5"
          >
            <h3 className="font-heading text-lg font-semibold">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ser la agencia de referencia en Latinoamerica para empresas que
              buscan una transformacion digital integral, combinando
              creatividad, tecnologia y estrategia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm border border-border bg-background p-5"
          >
            <h3 className="font-heading text-lg font-semibold">Mision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Potenciar la presencia digital de nuestros clientes a traves de
              soluciones innovadoras que generan valor real y resultados
              medibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
