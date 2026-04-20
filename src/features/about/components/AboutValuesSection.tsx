import { motion } from "framer-motion";

import { values } from "@/features/about/constants/about.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function AboutValuesSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container-vb">
        <SectionHeading label="Principios" title="Nuestros valores" />

        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-3 md:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-sm border border-border bg-background p-4"
            >
              <h4 className="font-heading text-sm font-semibold">
                {value.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
