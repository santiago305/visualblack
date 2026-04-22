import { useParams } from "react-router-dom";

import { PageSeo, StructuredData } from "@/components/seo";
import { getServiceBySlug, services } from "@/data/services";
import { ServiceDetailContent } from "@/features/services/components";
import {
  buildServiceMetadata,
  createServiceBreadcrumbSchema,
  createServiceSchema,
} from "@/lib/seo";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageSeo metadata={buildServiceMetadata(service)} />
      <StructuredData
        id={`service-breadcrumb-${service.slug}`}
        data={createServiceBreadcrumbSchema(service)}
      />
      <StructuredData
        id={`service-schema-${service.slug}`}
        data={createServiceSchema(service)}
      />
      <ServiceDetailContent service={service} otherServices={otherServices} />
    </>
  );
}
