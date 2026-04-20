import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { servicePreview } from "@/features/home/constants/home.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function ServicesPreviewSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container-vb">
        <SectionHeading
          label="Soluciones"
          title="Lo que hacemos"
          description="Ofrecemos soluciones integrales que cubren todo el espectro digital."
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {servicePreview.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="block rounded-sm border border-border bg-background p-4 transition-colors hover:border-foreground/20"
              >
                <span className="text-xl">{item.icon}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
