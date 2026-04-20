import { motion } from "framer-motion";

import { processSteps } from "@/features/about/constants/about.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function AboutProcessSection() {
  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading label="Proceso" title="Como trabajamos" />

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-3 md:grid-cols-4">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-sm border border-border p-4"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/30">
                {item.step}
              </span>
              <h4 className="mt-2 font-heading text-sm font-semibold">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
