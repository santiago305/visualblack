import { useParams } from "react-router-dom";

import { getServiceBySlug, services } from "@/data/services";
import { ServiceDetailContent } from "@/features/services/components";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return <ServiceDetailContent service={service} otherServices={otherServices} />;
}
