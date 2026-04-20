import type { Service } from "@/features/services/types/service.types";

import { ServiceDetailHero } from "./ServiceDetailHero";
import { ServiceDetailOverview } from "./ServiceDetailOverview";
import { ServiceDetailRelated } from "./ServiceDetailRelated";
import { ServiceDetailSidebar } from "./ServiceDetailSidebar";

type Props = {
  service: Service;
  otherServices: Service[];
};

export function ServiceDetailContent({ service, otherServices }: Props) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="container-vb space-y-12 md:space-y-16">
        <ServiceDetailHero service={service} />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <ServiceDetailOverview service={service} />
          <ServiceDetailSidebar service={service} />
        </div>

        <ServiceDetailRelated services={otherServices} />
      </div>
    </section>
  );
}
