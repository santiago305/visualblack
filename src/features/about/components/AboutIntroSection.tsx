import { motion } from "framer-motion";

import SectionHeading from "@/shared/components/SectionHeading";

export function AboutIntroSection() {
  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading label="Nosotros" title="Quienes somos" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[800px]"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">visualblack</strong> es una
            agencia digital integral que combina estrategia, creatividad y
            tecnologia para impulsar negocios en el entorno digital. Trabajamos
            con empresas que buscan mas que una presencia online: buscan
            resultados reales, medibles y sostenibles.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Desde nuestra fundacion, hemos ayudado a mas de 85 empresas a
            transformar su estrategia digital, desde el posicionamiento de marca
            hasta el desarrollo de plataformas web de alto rendimiento. Nuestro
            enfoque se basa en entender profundamente cada negocio para disenar
            soluciones a medida que generan impacto.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Trabajamos contigo para impulsar tu negocio en el entorno digital,
            combinando estrategia, creatividad y tecnologia en cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
