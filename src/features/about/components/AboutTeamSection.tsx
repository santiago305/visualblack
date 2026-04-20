import { motion } from "framer-motion";

import { team } from "@/features/about/constants/about.constants";
import SectionHeading from "@/shared/components/SectionHeading";

export function AboutTeamSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container-vb">
        <SectionHeading label="Equipo" title="Las personas detras" />

        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-3 md:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="mb-2 aspect-square overflow-hidden rounded-sm border border-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-heading text-sm font-semibold">{member.name}</h4>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
