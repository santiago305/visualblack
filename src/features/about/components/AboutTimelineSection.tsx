import { motion } from "framer-motion";

import { timeline } from "@/features/about/constants/about.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function AboutTimelineSection() {
  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading label="Trayectoria" title="Nuestra historia" />

        <div className="mx-auto max-w-[700px] space-y-0">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-4 pb-6"
            >
              <div className="flex flex-col items-center">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground" />
                {index < timeline.length - 1 && (
                  <div className="h-full w-px flex-1 bg-border" />
                )}
              </div>

              <div className="pb-2">
                <span className="text-xs text-muted-foreground">{item.year}</span>
                <h4 className="font-heading text-sm font-semibold">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
