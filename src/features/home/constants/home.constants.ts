import { services } from "@/data/services";
import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

const serviceIcons: Record<string, string> = {
  "marketing-digital": "📊",
  "desarrollo-web": "💻",
  "campanas-publicitarias": "📢",
};

const previewOrder = [
  "marketing-digital",
  "desarrollo-web",
  "campanas-publicitarias",
] as const;

export const metrics = [
  { value: "120+", label: "Proyectos entregados" },
  { value: "85", label: "Clientes satisfechos" },
  { value: "98%", label: "Tasa de retencion" },
  { value: "5+", label: "Anos de experiencia" },
] as const;

export const servicePreview = previewOrder
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => service !== undefined)
  .map((service) => ({
    icon: serviceIcons[service.slug] ?? "*",
    title: service.title,
    desc: service.shortDescription,
    path: PATHS.serviceDetail(service.slug),
  }));
