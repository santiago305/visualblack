import { motion } from "framer-motion";

import { metrics } from "@/features/home/constants/home.constants";

export function MetricsSection() {
  return (
    <section className="border-y border-border py-12">
      <div className="container-vb">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl font-bold md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
